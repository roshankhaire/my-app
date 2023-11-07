import React ,{useState}from "react";
import { useEffect } from "react";
import axios from "axios";
const GetDailyExpense=(props)=>{
   const [userData,setUserData]=useState([])
  useEffect(()=>{
   axios.get("https://crudcrud.com/api/0696377f8ea24503b41000369ac775ff/exprnseObject")
   .then((response)=>{
      console.log(response)
      setUserData(response.data)
   })
  },[])
        
 
  
     return(
        <>
     
      
       {userData.map((data)=>{
               return<div>
                  
                  <h3>Money: {data.money} </h3> 
                  <h3> Discription:{data.discription} </h3> 
                  <h3> Category:{data.category} </h3> 
               </div>
       })}
        </>
     )
}
export default GetDailyExpense