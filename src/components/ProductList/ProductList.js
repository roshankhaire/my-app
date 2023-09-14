import React from "react"
import classes from "./ProductList.module.css"
import ProductForm from "../ProductForm/ProductForm"
import { useContext } from "react"
import CartContext from "../../store/CartContext"
const ProductList=(props)=>{
    const cartCtx=useContext(CartContext)

     const addToCartHandler=( amount,size)=>{
            cartCtx.addItem({
                id:props.id,
                name:props.name,
               amount:amount,
                img:props.img,
                key:props.id,
                price:props.price,
                size:size
            })
            const name=localStorage.setItem("name",props.name)
            fetch('https://tshirtreactproject-default-rtdb.firebaseio.com/TShirtDataToBackend.json',{
                method:"POST",
                body:JSON.stringify( {
                    id:props.id,
                    name:props.name,
                    price:props.price,
                    amount:amount,
                    size:size,
                    img:props.img,
                    
                }) ,
                headers:{
                  "Content-Type":"application/json"
                }
            }).then((res)=>{
                return res.json().then((data)=>{
                    console.log( "dataToBackend from product item",data)
                })
              })
     }
     return(
            <li>
            <div>
                <span className={classes.img}>{props.img}</span> 
                <div>
                <span>{props.name}</span>
                </div>
                
                <div>
                <span>Rs{props.price}</span>
                </div>
               
            </div>
            <div>
                <ProductForm onAddToCart={addToCartHandler}/>
            </div>
            </li>
     )
}
export default ProductList