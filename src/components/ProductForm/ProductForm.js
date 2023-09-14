import React from "react";

import { useRef ,useState} from "react";
const ProductForm=(props)=>{
    const [amountIsValid,setAmountisValid]=useState(true)
    const amountRef=useRef()
    const sizeRef=useRef()
    const submitHandler=(event)=>{
         event.preventDefault();
         const enteredAmount=amountRef.current.value;
         const enteredAmountBuUser=+enteredAmount
         const enteredSize=sizeRef.current.value;
       
         props.onAddToCart( enteredAmountBuUser,enteredSize)
    }
    

  
    return(<form  onSubmit={submitHandler}>
         <label>Choose a Size:</label>

<select htmlFor={props.name} ref={sizeRef}>
<option value="M">M</option>
<option value="S">S</option>
<option value="l">L</option>

</select>
<label >Amount</label>
<input  htmlFor={props.id} ref={amountRef}
type='number'
        min='1'
        max='5'
        step='1'
        defaultValue='1'/>
       
        <button > ADD TO CART</button>
       
    </form>)
}
export default ProductForm