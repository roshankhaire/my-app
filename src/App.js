import React,{useState} from "react"
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CartIcon from "./components/pages/CartIcon";
import Product from "./components/pages/Product";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AuthForm from "./components/AuthForm";
import Expense from "./components/pages/Expense";
import Profile from "./components/pages/Profile";
import ForgotPassword from "./components/pages/ForgotPassword";
function App(props) {
  const [cartIaShown,setCartIsShown]=useState(false);
   const showCartHandler=()=>{
       setCartIsShown(true)
  }
   const hideCartHandler=()=>{
            setCartIsShown(false)
  }



      

   
    
  return <CartProvider>

 { cartIaShown && <Cart onClose={hideCartHandler}/>}
  <Router>
    <NavBar onShowCart={showCartHandler}/>
    <Routes>
    <Route path="/home" element={<Home/>}/>
 
    <Route path="/product" element={<Product/>}/>
    <Route path="/auth" element={<AuthForm/>}/>
    <Route path="/expense" element={<Expense/>}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/forgotPassword" element={<ForgotPassword/>}/>
    
    </Routes>
    </Router>
   
     </CartProvider>;
}

export default App;
