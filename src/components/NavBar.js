import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
//import { useContext} from 'react';
import { useDispatch, useSelector } from "react-redux";
import CartContext from '../store/CartContext';
//import AuthContext from '../store/AuthContext';
import { useNavigate } from "react-router-dom";
import { authActions } from '../reduxStore/auth';
function ColorSchemesExample(props) {
  const isLoggedIn=useSelector(state=>state.isLoggedIn)
  const dispatch=useDispatch()
  let navigate = useNavigate();
  //const cartCtx=useContext(CartContext);
//const authCtx=useContext(AuthContext)
 // const isLoggedIn=authCtx.isLoggedIn
  // let noOfCartitems=cartCtx.items.reduce((curNum,item)=>{
  //   return curNum + item.amount
  // },0)
 const logoutHandler=()=>{
             console.log("logoutHandlersuccessfully")
            // authCtx.logout()
            dispatch(authActions.logout())
            navigate("/auth")
 }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <li>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/product">Products</NavLink>
           { isLoggedIn && <NavLink to="/expense">Expense</NavLink>}
            
              <button onClick={props. onShowCart}>cart<sup>{0}</sup></button>
           
           { !isLoggedIn && <NavLink to="/auth">Login</NavLink>}
           <button onClick={logoutHandler}>
              Logout
           </button>
          
            </li>
          </Nav>
        </Container>
      </Navbar>
      

    </>
  );
}

export default ColorSchemesExample;