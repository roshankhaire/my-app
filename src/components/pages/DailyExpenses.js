import React from "react";
import { useState } from "react";
import axios from "axios"
import GetDailyExpense from "./GetDailyExpense";
const DailyExpenses=()=>{
 
    const data={money:"",discription:"",category:""}
    const [inputData,setInputData]=useState(data)
      const dataHandler=(event)=>{
       
        setInputData({...inputData,[event.target.name]:event.target.value})
       

      }
     
               
               const submitHandler=(event)=>{
                   event.preventDefault()
                   axios.post("https://crudcrud.com/api/0696377f8ea24503b41000369ac775ff/exprnseObject",inputData
          
                   ).then((response)=>{
                     console.log(response)
                   });
               
               }

               
              


      
      return(
        <>
        <form onSubmit={submitHandler}>
            <h3>DailyExpenses</h3>
          <label >Enter Money</label>
            <input type="money" name="money" value={inputData.money} onChange={dataHandler}/><br/>
            <label >Add Discription</label>
            <input type="discription" name="discription"  value={inputData.discription} onChange={dataHandler}/><br/>
            <label >Choose Category</label>
            <select  name="category" value={inputData.category} onChange={dataHandler} >
               <option value="food">Food</option>
               <option value="petrol">Petrol</option>
               <option value="salary">Salary</option>

            </select>
            <button >Add Expense</button>
           </form>
           <GetDailyExpense/>
           </>
      )
}
export default DailyExpenses