import React from "react";

const ItemInCart = (props) => {
/* --------------------------------------Increse------------------------ */
    const increaseAmount = () => {

        const id = props.id
        const allItems = JSON.parse(window.localStorage.getItem("cartProducts"))
      
        for (let i = 0; i < allItems.length; i++) {
      
          if (allItems[i].id === id) {
      
            allItems[i].amount = allItems[i].amount + 1
            window.localStorage.setItem("cartProducts", JSON.stringify(allItems))
            props.setItems(JSON.parse(window.localStorage.getItem("cartProducts")))
            props.setTotal(props.inTotal)
          }
        }
      }
/*---------------------------------------Decrese----------------------------------*/
      const decreaseAmount = () => {

        const id = props.id
        const allItems = JSON.parse(window.localStorage.getItem("cartProducts"))
      
        for (let i = 0; i < allItems.length; i ++) {
          
          if (allItems[i].id === id) {
      
            if(allItems[i].amount === 1)
              return 
      
            allItems[i].amount = allItems[i].amount - 1
            window.localStorage.setItem("cartProducts", JSON.stringify(allItems))
            props.setItems(JSON.parse(window.localStorage.getItem("cartProducts")))
            props.setTotal(props.inTotal)
          }
        }
      }
      /* ------------------------------------Remove from cart------------------------- */
      const removeFromCart = () => {
    
        const allItems = JSON.parse(window.localStorage.getItem("cartProducts"))
        const filteredItems = allItems.filter( (item) => item.id !== props.id)
        window.localStorage.setItem("cartProducts", JSON.stringify(filteredItems))
        props.setItems(filteredItems)
        props.setTotal(props.inTotal)
       
      }
return(
  <div className="item-in-cart-wrap">
     <div className='image-in-cart-wrap'>
      <img className="image-in-cart" src={props.image} alt="Item"/>
</div>
      <div className='title-quantity'>
      <p className="item-in-cart-title">
        {props.title}
      </p>
      <section className="price-and-amount">
        <section className="plus-amount-minus">
          <section className="plus-minus"> 
          <p className="quantity">Quantity:</p>
          <div className='amount-wrap'>
            <button className="amount-btn" onClick={increaseAmount}>+</button> 
            <p className="item-in-cart-amount">{props.amount}</p>
            <button className="amount-btn" onClick={decreaseAmount}>-</button>
            </div>
          </section>
         
         
          
        </section>
      
        <p className="item-in-cart-price">
          Price: {props.price}$
        </p>

        <button className='delete' onClick={removeFromCart}>Delete</button>

      </section>
     </div>
  </div>
)
}
export default ItemInCart