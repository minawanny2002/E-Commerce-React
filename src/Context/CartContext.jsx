import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { userContext } from './UserContext';


export const cartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartID, setcartID] = useState(null);
    const { userToken } = useContext(userContext);

    const [cartCounter, setcartCounter] = useState("0");
    function getUserCart() {
        
        return axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
            headers: {
                token: localStorage.getItem('userToken')
            },
        })
            .then((response) => response)
            .catch((error) => error)

    }

    function addProductToCart(productID){
        return axios.post("https://ecommerce.routemisr.com/api/v1/cart" ,{productId:productID} ,{
            
            headers:{
                token:localStorage.getItem('userToken'),
            }
        })
        .then( (response)=> response)
        .catch( (error) => error);
    }

    function updateProductCount(productID , newCount)
    {
        
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productID}` , {count:newCount} , {
            headers:{
                token:localStorage.getItem('userToken'),
            }
        })
        .then( (response)=> response)
        .catch( (error) => error);
    }

    function deleteCartItem(productID)
    {

    
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productID}` , {
            headers:{
                token:localStorage.getItem('userToken'),
            }
        })
        .then( (response)=> response)
        .catch( (error) => error);
    }

    function deleteAllCart()
    {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart` , {
            headers:{
                token:localStorage.getItem('userToken'),
            }
        })
        .then( (response)=> response)
        .catch( (error) => error);
    }
    return (
        <cartContext.Provider value={{addProductToCart, getUserCart ,updateProductCount,deleteCartItem,deleteAllCart,cartCounter, setcartCounter,cartID, setcartID}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider