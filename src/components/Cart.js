import React, {useState, useEffect} from "react";
import ItemInCart from "./ItemInCart";


const Cart = ()=>{
   const[products, setProducts]= useState([])
  const[loading, setLoading]= useState(false)
  const [items, setItems] = useState(JSON.parse(window.localStorage.getItem("cartProducts")))

  const inTotal = () => {

    let getAllItems = JSON.parse(window.localStorage.getItem("cartProducts"))
    let bill = 0
    for(let i = 0; i < getAllItems.length; i ++) {
      bill += parseFloat(getAllItems[i].amount) * parseFloat(getAllItems[i].price)
    }
    return bill.toFixed(2)
  }

  const [total, setTotal] = useState(inTotal)


  

    useEffect(()=>{

      setLoading(true);
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
     
        setProducts(data);
      
      console.log(products)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    })

}, [ ])   
  if (loading || !products ) {
    return <p>Data is loading...</p>} 
     
   


    return(
        <div className='total'>
        
     
        <section>{
             items.map(element => {
              return (
                <ItemInCart 
      
                  key={element.id}
                  id={element.id}
                  image={element.image}
                  price={element.price}
                  title={element.title}
                  amount={element.amount}
                  setItems={setItems}
                  setTotal={setTotal}
                  inTotal={inTotal}
                  total ={total}
                />
            )
      
      })
        }
        
                <p>Total:</p>
                <p>{total} $</p>
            
</section>
       
         
    </div>
    );
}
export default Cart