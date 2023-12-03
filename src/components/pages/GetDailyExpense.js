import React, { useState,useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const GetDailyExpense=(props)=>{
   const [data,setData]=useState([])

   let premium=localStorage.getItem("money")
  premium=premium+localStorage.getItem("money")
   console.log(premium)
  
   function getData(){
         
         axios.get('https://654c394977200d6ba858a111.mockapi.io/expensePost/Post')
         .then((res)=>{
            console.log(res.data);
            setData(res.data)
         })

      
   
   }
 
   const deleteHandler=(id)=>{
      console.log("this is delete Handler",id)
      axios.delete(`https://654c394977200d6ba858a111.mockapi.io/expensePost/Post/${id}`)
      .then(()=>{
         getData()
      })
   }
   const setToLocalStorage=(id,money,discription,category)=>{
      localStorage.setItem("id",id)
      localStorage.setItem("money",money)
      localStorage.setItem("discription",discription)
      localStorage.setItem("category",category)

   }
   useEffect(()=>{
      getData()
   },[])
   const showPremium=()=>{
             console.log("premium")
   }
 
   return(
      <>
      <h2>Expense Tracker</h2>
      
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Money</th>
      <th scope="col">Description</th>
      <th scope="col">category</th>
     
    </tr>
  </thead>
       {
         data.map((eachData)=>{
             return(
               <tbody>
               <tr>
                 <th scope="row">{eachData.id}</th>
                 <td>{eachData.money}</td>
                 <td>{eachData.discription}</td>
                 <td>{eachData.category}</td>
                 <td>
                  <NavLink to="/editDailyExpense">
                  <button className="btn-success" onClick={()=>setToLocalStorage(
                      eachData.id,
                      eachData.money,
                      eachData.discription,
                      eachData.category
                  )}>Edit</button>
                  </NavLink>
                   
                 </td>
                 <td>
                    <button className="btn-danger" onClick={()=>{deleteHandler(eachData.id)}}>Delete</button>
                 </td>
                 
               </tr>
              
               
             </tbody>
             
             )
         })
         
    }
</table>
   
 
<div>
   
    {premium >10000 && <h1>Your Daily Expense is {data.map((eachData)=>{return eachData.money})} Rs.
     </h1>}
   <NavLink to="/premium"> 
   <button onClick={showPremium}>Activate Premium</button> </NavLink> 
    {premium <10000 && <h1>Your Daily Expense is {data.map((eachData)=>{return eachData.money})} Rs.
       </h1> }
</div>
      </>
   )
}
export default GetDailyExpense