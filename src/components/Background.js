import React from 'react';
import image from './shoping.jpg'
const Background = ()=>{
    return(
        <div className="wrap-background">
           
                 <h1 className="opening-title">Welcome</h1>
            
            <div className='background'>
       
            <img src={image}/>
        </div>
        
        </div>
    )
}
export default Background