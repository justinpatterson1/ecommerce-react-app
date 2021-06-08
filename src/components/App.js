import '../css/App.css';
import AddProduct from "../components/AddProduct";
import ProductCheckOut from "../components/ProductCheckOut";
import TotalCost from "../components/TotalCost"
import {useState,useEffect} from 'react';



function App() {


  /*const [checkout,setCheckOut] = useState([]);
  const [quantity,setQuantity]=useState(0);
  const [extendedPrice,setExtendedPrice] = useState(0);*/
  const [newProduct,setNewProduct] = useState([]);



  
  
 
 
  const addProduct = (product)=>
  {
      setNewProduct([...newProduct,product]);
      
  }

 


 
 /* const up = (id) =>
  {
    
      const newQuantity = product.find(product=> product.id === id);

      //const update = newQuantity.quantity + 1;
      console.log(newQuantity)

    //setProduct(update);
    
  }*/

 /* const addNewProduct= (p,u) =>
  {
    const newProduct = {

      id:(Math.floor(Math.random()*1000)+1),
      product:p,
      unitPrice:u
    }

    setProduct(newProduct)
  }*/

 useEffect(()=>{
    const newProducts= [
      {
        id:1,
        product:"Pants",
        unitPrice:10.99
      }
    ]

    setNewProduct(newProducts);
  },[])



  return (
      <div>
          <AddProduct addNewProduct={addProduct} />
        <div>
          <ProductCheckOut newProduct={newProduct}/>
        </div>
       
        <div>
          <TotalCost/>
        </div>
      </div>
  );
}

export default App;
