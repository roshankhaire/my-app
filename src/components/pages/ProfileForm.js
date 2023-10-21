import React, { useState,useEffect } from "react";
import GetUserProfile from "./GetUserProfile";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
const Profile=(props)=>{
  const cartCtx=useContext(CartContext)
  const [fname,setFname]=useState("")
  const [fullname,setFullname]=useState("")
  const [profile,setProfile]=useState("")
  const [profilePhoto,setProfilePhoto]=useState("")
  
   
     const inputEvent=(event)=>{
         // console.log(event.target.value);
          setFname(event.target.value);
           
     }
     const inputEventTwo=(event)=>{
             setProfile(event.target.value)
     }
     const userfullname=fname
     const userlastname=profile
     const key=userfullname
     const user={
      userfullname:fname,
      userlastname:profile
     }
     const userArray=[{
      userfullname:fname,
      userlastname:profile
     }]
   const submitHandler=(event)=>{
    event.preventDefault();
       setFullname(fname)
       setProfilePhoto(profile)
       console.log(user)
       localStorage.setItem("userfullname",userfullname)
       props. onAddUserData(user)
       console.log(userArray)
       cartCtx.addUserUpdate({
        key:userfullname,
        userfullname:userfullname,
        userlastname:userlastname
       })
       
   }
   const userFullName= localStorage.getItem('userfullName');
   let userArrayDisplay
   
       userArrayDisplay=userArray.map((item)=>(
        <GetUserProfile key={item.userfullname}
        userfullname={item.userfullname}
        userlastname={item.userlastname}/>
       ))
   
       useEffect(() => {

        let cartDataArray = [];
        fetch("https://expenseuserprofile-default-rtdb.firebaseio.com/ExpenseTrackerUserData.json", {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => {
            return res.json().then((data) => {
                console.log("dataFromBackend", data)

                for (let key in data) {
                   


                        cartDataArray.push({
                            key: key,
                            userfullname: data[key].userfullname,
                            userlastname: data[key].userlastname,
                            
                        })
                    
                }


                // console.log(cartDataArray)

                console.log('insie in cartDataArray fromProductList', cartDataArray)

                cartDataArray.forEach(element =>
                  
                    // console.log(element)
                    cartCtx.addUserUpdate({element})
                );

            })
        })


    }, [])
   return(
        <>
        <form onSubmit={submitHandler}>
        <h1>Contact Detail</h1>
       
            <label htmlFor="fullName">FullName:</label>
            <input type="text" onChange={inputEvent} 
            
            value={fname}/><br/>
             <label htmlFor="photo">ProfilePhotoURL:</label>
            <input type="text" onChange={inputEventTwo} 
            
            value={profile}/><br/>
             
          
            <button > Update</button>
            <button>Cancel</button>
      
   
        </form>
           {userArrayDisplay}
     
        </>
        
      )
}
export default Profile