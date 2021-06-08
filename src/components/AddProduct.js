import React from 'react'
import {useState} from 'react';

const AddProduct = (props) => {

    const [product,setProduct] = useState("");
    const [unitPrice,setUnitPrice] = useState("");

    return (
        <div>
            <div>
                 <input type="text" value={product} placeholder="Product" onChange={(event)=>{
                     setProduct(event.target.value)
                 }} />
            </div>
            <div>
                 <input type="text" value={unitPrice} placeholder="Unit Price" onChange={(event)=>{
                     setUnitPrice(event.target.value)
                 }} />
            </div>
            <button type="button" value=""  onClick={()=>{
                const newProduct ={
                    id:(Math.floor(Math.random()*1000)+1),
                    product,
                    unitPrice
                }
                props.addNewProduct(newProduct);
               // props.onAddProduct(newProduct)
               
                alert(newProduct)
            }}> Add Item </button>
           
           
        </div>
    )
}

export default AddProduct
