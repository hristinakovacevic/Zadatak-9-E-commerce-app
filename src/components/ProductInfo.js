import React, {useEffect, useState} from "react";
import { useParams } from "react-router";

const ProductInfo = () =>{
    const[product, setProduct]= useState({})
    const[loading, setLoading]= useState(false)

    const { id } = useParams();
    let cartProducts = []


useEffect(()=>{

     setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) =>  setProduct(data))
    
        .catch((err)=>{
            console.log(err)
        })
        .finally(() => {
            setLoading(false);
          })
         
    
    }, [])


    if (loading || !product) {
        return <p>Data is loading...</p>}



const addToCart = ()=>{
    
    
   

    if(localStorage.getItem('cartProducts')){
       
        cartProducts = JSON.parse(localStorage.getItem('cartProducts'))
    }
        
        let amountIncresed = false
      
    cartProducts.forEach(elem => {
        
        if(elem.id === id){
            elem.amount += 1
            amountIncresed = true
        }
    }) 
    if(!amountIncresed){
         product.amount = 1
         cartProducts.push(product) 
    }
   
   
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
}

       
    return(
        <div>
        <div className='single-page-wrap'>
        <div className='single-page'> 
            <img className='single-page-img' src={product.image}/>
            <div className='single-page-p'>
            <p><b>{product.title}</b></p>
            <p className='product-price'>{product.price} $</p>
            <p>{product.description}</p>
            <button onClick={addToCart} className='add-btn'>Add to cart</button>
            </div>
        
           
 
</div>
        </div>
        </div>
    )
}
export default ProductInfo