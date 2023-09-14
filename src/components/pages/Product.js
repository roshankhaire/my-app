import React from "react";
import ProductList from "../ProductList/ProductList";
import Card  from "../Card/Card.js";
import { useEffect } from "react";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
const products=[{
    id:1,
    name:"Tshirt with Red Color",
    img:<img src="https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=h1n990JR40ZFbPRDpxKppFziIWrisGcE_d9OqkLVAC4="/>,
    price:1234
},{
    id:2,
    name:"Tshirt with Black Color ",
    img:<img src="https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70"/>,
    price:1000
},{
    id:3,
    name:"Tshirt with White Color",
    img:<img src="https://media.istockphoto.com/id/1392528328/photo/portrait-of-smiling-handsome-man-in-white-t-shirt-standing-with-crossed-arms.webp?b=1&s=170667a&w=0&k=20&c=1VLP56VSuFBdjE-ioEuLEbOO-UIUGBnISnOjjymsB8s="/>,
    price:2000
}]
const Product=(props)=>{
    const cartCtx=useContext(CartContext)
    const name = localStorage.getItem('name');

    useEffect(() => {

        let cartDataArray = [];
        fetch('https://tshirtreactproject-default-rtdb.firebaseio.com/TShirtDataToBackend.json', {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => {
            return res.json().then((data) => {
                console.log("dataFromBackend", data)

                for (let key in data) {
                    if (name === data[key].name) {


                        cartDataArray.push({
                            key: key,
                            amount: data[key].amount,
                            price: data[key].price,
                            img: data[key].img,
                            name: data[key].name,
                            id: data[key].id,
                          
                        })
                    }
                }


                // console.log(cartDataArray)

                console.log('insie in cartDataArray fromProductList', cartDataArray)

                cartDataArray.forEach(element =>
                    //
                    // console.log(element)
                    cartCtx.addItem(element)
                );

            })
        })


    }, [])
     const data=products.map((item)=><ProductList
     id={item.id}
     key={item.id}
     img={item.img}
     price={item.price}
     name={item.name}/>)
      return(
         <section>
           <Card>
            <ul>
                {data}
                
            </ul>
            </Card>
          
         </section>
      )
}
export default Product