import React from "react";
import { useEffect,useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import NavLink from "react-bootstrap/esm/NavLink";
import CsvDownloadButton from 'react-json-to-csv'
const Premium=()=>{
    const [data,setData]=useState([])
   
    const id=localStorage.getItem("id")
    const money=localStorage.getItem("money")
    const discription=localStorage.getItem("discription")
    const category=localStorage.getItem("category")
    function getData(){
         
        axios.get('https://654c394977200d6ba858a111.mockapi.io/expensePost/Post')
        .then((res)=>{
           console.log(res.data);
           setData(res.data)
        })

     
  
  }
  const setToLocalStorage=(id,money,discription,category)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("money",money)
    localStorage.setItem("discription",discription)
    localStorage.setItem("category",category)

 }
 let mockData=[{
    id:{id},
    money:{money},
    category:{category},
    discription:{discription}
 }]
    return(
        <>
       
        <h1>This is Expense Record</h1>
         <h1>id:{id}</h1>
         <h1>mony:{money}</h1> 
          <h1>discription:{discription}</h1>
          <h1>category:{category}</h1>
        
         
       <CsvDownloadButton data={mockData} />    
        
     
      
      
        </>
    ) 
}
export default Premium