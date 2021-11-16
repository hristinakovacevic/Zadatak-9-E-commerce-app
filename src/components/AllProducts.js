import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'




const AllProducts = ({dataCategory} )=>{
  const[products, setProducts]= useState([])
  const[loading, setLoading]= useState(false)
    
   

    useEffect(()=>{

      let apiUrl = `https://fakestoreapi.com/products/category/${dataCategory}`
      if(!dataCategory){
        apiUrl="https://fakestoreapi.com/products"
      }

      setLoading(true);
  fetch(apiUrl)
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
  if (loading || !products || !products.length) {
    return <p className='loading'>Data is loading...</p>}
  
  return ( 
    
    <div className='product-card'>
    { products.map(product => 
 <div className='card' key={product.id}>
 <Link to={`/product-info/${product.id}`}><img className='product-img' src={product.image} alt="all"/></Link>
 <p>{product.title}</p>
 <p>{product.price}$</p>
 </div>) 
 
} 

</div>

);
}

export default AllProducts;
