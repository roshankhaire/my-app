import react from "react";
import classes from "./Cart.module.css"
import Modal from "../Modal/Modal";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
const Cart=(props)=>{
   const cartCtx=useContext(CartContext)
   const totalAmount=cartCtx.totalAmount;
   const hasItem=cartCtx.items.length >0;
   const cartItemAddHandler=(item)=>{
      cartCtx.addItem({...item,amount:1})
   }
   const cartItemRemoveHandler=(id)=>{
       cartCtx.removeItem(id)
   } 
    const cartItems=<ul className={classes['cart-items']}>
      {cartCtx.items.map((item)=>
    <CartItem key={item.id}
    name={item.name}
    amount={item.amount}
    size={item.size}
    price={item.price}
    img={item.img}
    onRemove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandler.bind(null,item)}/>)}</ul>
    return(
          <Modal onClose={props.onClose}>
       
                <div  className={classes.modal}>
          
             {cartItems}
               <div className={classes.total}>
                  <span>Total Amount :</span>
                  <span>{totalAmount}</span>
              </div>
              <div className={classes.actions}>
                 <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                 { hasItem && <button className={classes.button}>Order</button>}
              </div>
              </div>
              </Modal>
             
        
        )
}
export default Cart