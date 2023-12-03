import { createSlice } from "@reduxjs/toolkit";

import axios from "axios"
     const initialState={
        isLoggedIn:false,
        token:"",
        user:null
     }
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login(state,action){
            state.isLoggedIn=true;
            state.user=action.payload
         },
         logout(state){
             state.token=null
         }
    }
        
   
})
export const authActions=authSlice.actions
export default authSlice