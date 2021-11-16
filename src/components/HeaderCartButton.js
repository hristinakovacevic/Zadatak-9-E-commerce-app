import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const HeaderCartButton = () =>{
 const[loading, setLoading] = useState(false)
 const[amount, setAmount] = useState()

let getItem=[]

useEffect(()=>{
    setLoading(true)
    
    if(localStorage.getItem('cartProducts')){
        
getItem.push(JSON.parse(localStorage.getItem('cartProducts'))) 

        for(let i=0; i < getItem.length; i++){
            setAmount(getItem[i].length) 
    
        }
    }
}, [amount])

if(loading){
    <div>loading</div>
}

return(
    <div>
    <Link to='/cart' className='link' style={{textDecoration:'none'}}>
        <span className='icon'>
            <CartIcon/>
        </span>
        <span className='cart-header'  style={{textDecoration:'none'}}>Your Cart</span> 
        <span className='badge'>{amount}</span>
        
        </Link>
        </div>


   

   
)
}
export default HeaderCartButton