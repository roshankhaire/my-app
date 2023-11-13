import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const EditDailyExpense=()=>{
    const navigate=useNavigate()
    const [id,setId]=useState(0)
    const [money,setMoney]=useState("")
    const [discription,setDiscription]=useState("")
    const [category,setCategory]=useState("")
    const expenseObject={
        money:money,
        discription:discription,
        category:category

      }
    useEffect(()=>{
           setId(localStorage.getItem("id"))
           setMoney(localStorage.getItem("money"))
           setDiscription(localStorage.getItem("discription"))
           setCategory(localStorage.getItem("category"))
    },[]) 
const editHandler=(e)=>{
    e.preventDefault()
    axios.put( `https://654c394977200d6ba858a111.mockapi.io/expensePost/Post/${id}`,
              
    expenseObject,


  )
  .then(()=>{
    navigate("/getDailyExpense")
  })
}
         return(
            <>
            <h2>Edit Daily Expense</h2>
             <form>
  <div >
    <label htmlFor="money" className="form-label">Email Money</label>
    <input type="money" className="form-control" id="exampleInputMoney" aria-describedby="MoneyHelp"
        onChange={(e)=>setMoney(e.target.value)} value={money}/>
   
  </div>
  <div >
    <label htmlFor="discription" className="form-label">Enter Discription</label>
    <input type="discription" className="form-control" id="exampleInputDiscription"
        onChange={(e)=>setDiscription(e.target.value)}value={discription}/>
  </div>

  
  <label >Choose Category</label>
            <select  name="category" value={category}  onChange={(e)=>setCategory(e.target.value)}>
               <option value="food">Food</option>
               <option value="petrol">Petrol</option>
               <option value="salary">Salary</option>
               </select>
        
             
  <button type="submit" className="btn btn-primary"  onClick={editHandler}>Update</button>
</form>
            </>
         )
         
}
export default EditDailyExpense