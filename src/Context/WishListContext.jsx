import axios from 'axios';
import React, { createContext } from 'react'
import { useState } from 'react';


export const wishListContext = createContext();


const WishListContextProvider = ({ children }) => {

    const [wishlistCounter, setwishlistCounter] = useState("0")
    function addToWishList(pID) {
        return axios.post("https://ecommerce.routemisr.com/api/v1/wishlist", { productId: pID }, {
            headers: {
                token: localStorage.getItem('userToken')
            }
        })
            .then((response) => response)
            .catch((error) => error)

    }


    function getLoggedUserWishList() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
            headers: {
                token: localStorage.getItem('userToken')
            }
        })
            .then((response) => {
                return response
            })
            .catch((error) => error)

    }

    function deleteProductFromWishList(pID) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${pID}`, {
            headers: {
                token: localStorage.getItem('userToken')
            }
        })
            .then((response) => response)
            .catch((error) => error)

    }
    return (
        <wishListContext.Provider value={{ addToWishList, getLoggedUserWishList, deleteProductFromWishList, wishlistCounter, setwishlistCounter }}>
            {children}
        </wishListContext.Provider>
    )
}

export default WishListContextProvider