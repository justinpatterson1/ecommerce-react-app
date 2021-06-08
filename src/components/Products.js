import React from 'react'
import{useState} from 'react'

const Products = (props) => {

    const [quantity,setQuantity]=useState(0);
    const [extendedPrice,setExtendedPrice] = useState(0);
    
    const extendedProductPriceIncrease = ()=>
    {
       //let price = extendedPrice;
       let price = extendedPrice + parseFloat(props.unitPrice);
  
        setExtendedPrice(price);
    }
  
    const extendedProductPriceDecrease = ()=>
    {
       if(extendedPrice <=0)
       {
           setExtendedPrice(0);
       }
  
       if(extendedPrice !==0)
       {
          // let price = extendedPrice;
           let price = extendedPrice - parseFloat(props.unitPrice);
  
           setExtendedPrice(price);
       }
  
      
      
    }
  
    const quantityDecrease = ()=>
    {
  
       if(quantity > 0)
       {
           const amount = quantity - 1;
           setQuantity(amount);
       }
  
   }
        
   const quantityIncrease = ()=>
   {
  
     
          const amount = quantity + 1;
          setQuantity(amount);
   
  
  }
  

         

    return (
        <div className="grid col-4">
            
            <div>
                {props.product}
            </div>
            <div >
                <div className="grid col-3">
                <button className="quantityBtn" type="button" onClick={()=>{
                    quantityDecrease ();

                    extendedProductPriceDecrease ();

                   
                }}>-</button>
                     <div>{quantity}</div> 
                <button className="quantityBtn" onClick={()=>{
                    //props.quantityIncrease(props.id);
                    
                    quantityIncrease()

                    extendedProductPriceIncrease();
                }}>+</button>
                </div>
              
            </div>
            <div>
                {props.unitPrice}
            </div>
            <div>
                {extendedPrice}
            </div>
        </div>
    )
}
Products.defaultProps={
    product:"Item1",
    unitPrice:8.99
}
export default Products
