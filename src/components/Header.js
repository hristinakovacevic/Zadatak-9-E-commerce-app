import React from 'react';
import HeaderCartButton from "./HeaderCartButton";

import {Link} from 'react-router-dom'


const Header = ()=>{


    return(
        <div>
            <header className = 'header'>
          <Link to='/' className='link' style={{textDecoration:'none'}}> <div >Home</div></Link>
           <ul className='ul-header'>
               
           <Link to="/allproducts" className='link' style={{textDecoration:'none'}}><li >All Products</li></Link>
           <Link to="/electronics" className='link' style={{textDecoration:'none'}}><li>Electronics</li></Link>
           <Link to="/jewelery" className='link' style={{textDecoration:'none'}}><li >Jewelery</li></Link>
            <Link to="/men" className='link' style={{textDecoration:'none'}}><li> Men's clothing</li></Link>
           <Link to="/women"className='link' style={{textDecoration:'none'}}><li>Women's clothing</li></Link> 
                   
           </ul>
           <Link to='/cart'><HeaderCartButton/></Link>
           <Link to='/modal'><div className='hamburger'>
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="#242A45" fillRule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"/></svg>
           </div></Link>
           </header>
          

           </div>
        
    )
}
export default Header