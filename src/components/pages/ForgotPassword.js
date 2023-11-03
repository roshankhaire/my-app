import React from "react";
import { useRef } from "react";

const ForgotPassword=()=>{
       const emailInputRef=useRef();
       const submitHandler=(event)=>{
               event.preventDefault()
              console.log("send email link")
              const enteredEmail=emailInputRef.current.value
              console.log(enteredEmail)
              fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCjCPhC3SgAux6MAE-cUMEj5nzxy9OPWB8",{
                method:"POST",
                body:JSON.stringify({
                    requestType:"PASSWORD_RESET",
                    email:enteredEmail,

                }),
                headers:{
                    "Content-Type":"application/json"
                }
              }).then((res)=>{
                return res.json().then((data)=>{
                    console.log(data)
                })
              })
       }
      return(
        <>
        <h1>Enter Your Email</h1>
        <input  ref={emailInputRef} />
       <button onClick={submitHandler}>Send Link</button>
        </>
      )
}
export default ForgotPassword