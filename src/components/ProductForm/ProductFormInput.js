import React from "react";

const ProductFormInput=React.forwardRef((props ,ref)=>{
     return(<div>
            <label htmlFor={props.input.id}>Choose a Size:</label>

<select htmlFor={props.input.id} ref={ref} >
<option value="M">M</option>
<option value="S">S</option>
<option value="l">L</option>

</select>
        <label htmlFor={props.input.id}>{props.label}</label>
    
      
        <input  ref={ref} {...props.input}/>
       
     </div>)
})
export default ProductFormInput