import React from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const DailyExpenses=()=>{
        const navigate=useNavigate()
         const [money,setMoney]=useState("");
         const [discription,setDiscription]=useState("")
         const [category,setCategory]=useState("")
        const expenseObject={
          money:money,
          discription:discription,
          category:category

        }
        console.log(expenseObject)
     const submitHandler=(e)=>{
           e.preventDefault();
           console.log("Clicked")
           axios.post( 'https://654c394977200d6ba858a111.mockapi.io/expensePost/Post',
              
             expenseObject,
           

           )
           .then(()=>{
            navigate("/getDailyExpense")
           })
          
     }
               
              


      
      return(
        <>
       <h1>Daily Expenses</h1>
       <form>
  <div >
    <label htmlFor="money" className="form-label">Email Money</label>
    <input type="money" className="form-control" id="exampleInputMoney" aria-describedby="MoneyHelp"
    onChange={(e)=>setMoney(e.target.value)}/>
   
  </div>
  <div >
    <label htmlFor="discription" className="form-label">Enter Discription</label>
    <input type="discription" className="form-control" id="exampleInputDiscription"
     onChange={(e)=>setDiscription(e.target.value)}/>
  </div>

  
  <label >Choose Category</label>
            <select  name="category"  onChange={(e)=>setCategory(e.target.value)}>
               <option value="food">Food</option>
               <option value="petrol">Petrol</option>
               <option value="salary">Salary</option>
               </select>
        
             
  <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
</form>
           
          
          
           </>
      )
}
export default DailyExpenses