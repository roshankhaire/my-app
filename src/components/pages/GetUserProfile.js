import React ,{useState}from "react";
import { useEffect } from "react";
import axios from "axios";
const GetUserProfile=(props)=>{
   const [userData,setUserData]=useState([])
  useEffect(()=>{
   axios.get("https://crudcrud.com/api/9ee78f1e389e4227bc1b3227e0b358ec/user")
   .then((response)=>{
      console.log(response)
      setUserData(response.data)
   })
  },[])
        
 
  
     return(
        <>
     
      
       {userData.map((data)=>{
               return<div>
                  
                  <h3>Full Name: {data.name} </h3> 
                  <h3> ProfilePhoto{data.profilePhoto} </h3> 
               </div>
       })}
        </>
     )
}
export default GetUserProfile