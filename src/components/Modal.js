import React from "react";
import { Link } from "react-router-dom";
const Modal = ()=>{
   
return(
    
    <div className='modal'>
          <ul className='modal-list'>
               
               <Link to="/allproducts" className='link' style={{textDecoration:'none'}}><li >All Products</li> </Link> 
               <Link to="/electronics" className='link' style={{textDecoration:'none'}}><li>Electronics</li></Link>
               <Link to="/jewelery" className='link' style={{textDecoration:'none'}}><li >Jewelery</li></Link>
                <Link to="/men" className='link' style={{textDecoration:'none'}}><li> Men's clothing</li></Link>
               <Link to="/women"className='link' style={{textDecoration:'none'}}><li>Women's clothing</li></Link> 
                       
               </ul> 
    </div>
    
)
}
export default Modal