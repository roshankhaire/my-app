import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useContext} from 'react';
import CartContext from '../store/CartContext';
function ColorSchemesExample(props) {
  const cartCtx=useContext(CartContext)
  let noOfCartitems=cartCtx.items.reduce((curNum,item)=>{
    return curNum + item.amount
  },0)
 
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <li>
            <NavLink to="home">Home</NavLink>
            <NavLink to="product">Products</NavLink>
            <NavLink to="product">
              <button onClick={props. onShowCart}>cart<sup>{noOfCartitems}</sup></button>
            </NavLink>
            
            </li>
          </Nav>
        </Container>
      </Navbar>
      

    </>
  );
}

export default ColorSchemesExample;