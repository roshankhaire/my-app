import React from "react";
import {NavLink} from "react-router-dom"
import AuthContext from "../../store/AuthContext";
import { useContext } from "react";
const Expense=(props)=>{
    const authCtx=useContext(AuthContext)
    const token=authCtx.token;
    console.log(token)
    const emailVerification=()=>{
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCjCPhC3SgAux6MAE-cUMEj5nzxy9OPWB8",{
                method:"POST",
                body:JSON.stringify({
                    requestType:"VERIFY_EMAIL",
                    token:token
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
        <h1>Welcome To Expense Tracker</h1>
        <div ><span>Your Profile is incomplte.</span>
           <NavLink to="/profile">
           <button>Complete Now</button>
           </NavLink>
        </div>
        <button onClick={emailVerification}>Email Verification</button>
        <NavLink to="/dailyExpenses">
           <button>Daily Expenses</button>
           </NavLink>
        </>
    )
}
export default Expense