import React, {useState,useRef} from "react";
import classes from "./AuthForm.module.css"
import { useContext } from "react";
import AuthContext from "../store/AuthContext";

const AuthForm = () => {
    const authCtx=useContext(AuthContext)
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const confirmPasswordRef=useRef()
   
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading,setIsLoading]=useState(false)

    const switchAuthModeHandler = (event) => {
        event.preventDefault()
        setIsLogin((prevState) => !prevState);

    };
    const submitHandler=(event)=>{
            event.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;
        const enteredConfirmPassword=confirmPasswordRef.current.value;
        setIsLoading(true);
        let url;
        if(isLogin){
            url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrXKwWCPe_zUc5FVJdPqYgVHyEW9w2Lbw"
        }
        else{
            url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBrXKwWCPe_zUc5FVJdPqYgVHyEW9w2Lbw"
           }
        fetch(url,{
            method:"POST",
            body:JSON.stringify({
                  email:enteredEmail,
                  password:enteredPassword,
                  confirmPassword:enteredConfirmPassword,
                  returnSecureToken:true
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            setIsLoading(false)
            if(res.ok){
                   return res.json()
            }
        
            else {
                return res.json().then(data => {
                    let errorMessage = "authentication Fail";
                    if(data && data.error && data.error.message)
                    throw new Error(errorMessage)
                  })
                }
   
          
        }).then((data)=>{
            console.log(data)
            console.log(data.idToken)
            authCtx.login(data.idToken)
        }).catch((err)=>{
            alert(err.message)
        })
    }
   
      

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                  
                    <input type="email" id="email" required placeholder="email" ref={emailInputRef}/>
                </div>
                <div className={classes.control}>
                   
                    <input type="password" id="password" required placeholder="password" ref={passwordInputRef}/>
                </div>
                <div className={classes.control}>
                   
                    <input type="password" id="confirmpassword" required placeholder="confirmpassword" ref={confirmPasswordRef}/>
                </div>
                <div className={classes.actions}>
                  { !isLoading  && <button> {isLogin ? 'Login' : 'Create account'}</button>}
                  {isLoading && <p>sending request...</p>}
                    <button className={classes.toggle} onClick={switchAuthModeHandler}>
                        {isLogin ? 'Create new account' : 'Login with existing account'}</button>
                </div>
            </form>
        </section>
    )
}
export default AuthForm