import React from "react";
import {NavLink} from "react-router-dom"
const Expense=(props)=>{
    return(
        <>
        <h1>Welcome To Expense Tracker</h1>
        <div ><span>Your Profile is incomplte.</span>
           <NavLink to="/profile">
           <button>Complete Now</button>
           </NavLink>
        </div>
        </>
    )
}
export default Expense