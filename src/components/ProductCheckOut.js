import React from 'react';
import Products from "../components/Products"

const ProductCheckOut = (props) => {
    


    return (

        
        
        <div>
            <h1>E-Commerce Checkout</h1>

          <div className="grid col-4">
                <div>
                    <h3>Product</h3>
                    
                </div>
                <div>
                    <h3>Quantity</h3>
                   
                </div>
                <div>
                     <h3>Unit Price</h3>
                     
                </div>
                <div>
                     <h3>Extended Price</h3>
                     
                </div>
            </div>
            
            {
              props.newProduct.map((product)=>(<Products key={product.id} id={product.id} product={product.product} unitPrice={product.unitPrice}/>))    
            }
                  
                      
           <button>Calculate Total</button> 
                    
        </div>
    )
}

export default ProductCheckOut
