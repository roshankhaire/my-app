import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./auth"
const reduxStore=configureStore({
    reducer:{
        auth:authSlice.reducer
    }
})
export default reduxStore
    
    
