import React ,{useState}from "react";
import { useEffect } from "react";
import axios from "axios";
const GetUserProfile=(props)=>{
   const [userData,setUserData]=useState([])
  useEffect(()=>{
   axios.get("https://crudcrud.com/api/5873bdd31e81462dae0924f3726b3ff6/user")
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