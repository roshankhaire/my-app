import React from "react";
import {useRef} from "react"

const Profile=(props)=>{
    const nameRef=useRef()
    const profilePhotoRef=useRef()
    const submitHandler=(event)=>{
        event.preventDefault();
        const userData={
            name:nameRef.current.value,
            profilePhoto:profilePhotoRef.current.value
        }
        props.onAddUserData(userData)

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
   </>
}
export default Profile