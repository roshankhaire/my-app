import React,{useState} from "react"
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CartIcon from "./components/pages/CartIcon";
import Product from "./components/pages/Product";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AuthForm from "./components/AuthForm";


function App() {
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
    <Route path="home" element={<Home/>}/>
 
    <Route path="product" element={<Product/>}/>
    <Route path="auth" element={<AuthForm/>}/>
    </Routes>
    </Router>
   
     </CartProvider>;
}

export default App;
