import React from "react";
import {useRef} from "react"
import GetUserProfile from "./GetUserProfile";
import axios from "axios"
const Profile=(props)=>{
    const nameRef=useRef()
    const profilePhotoRef=useRef()
    const submitHandler=(event)=>{
        event.preventDefault();
       const  name=nameRef.current.value
        const profilePhoto=profilePhotoRef.current.value
        const userData={
            name:nameRef.current.value,
            profilePhoto:profilePhotoRef.current.value
        }
        console.log(userData)
        axios.post("https://crudcrud.com/api/5873bdd31e81462dae0924f3726b3ff6/user",userData
          
          ).then((response)=>{
            console.log(response)
          });
      
  
    }    
     
   return<>
    <span>Winners never quite,Quitters never win </span>
   <form onSubmit={submitHandler}>

    <span>Contact Details</span>
    <label htmlFor="name">Full Name</label>
    <input type="text" ref={nameRef}/>
    <label htmlFor="profilePhotoUrl">ProfilePhotoUrl</label>
    <input type="text" ref={profilePhotoRef}/><br/>
    <button>Update</button>
   </form>
  <GetUserProfile/>
   </>
}
export default Profile