import React, { useContext, useEffect } from 'react'
import { cartContext } from '../../Context/CartContext';
import { wishListContext } from '../../Context/WishListContext';

const Categories = () => {
  const {setcartCounter, getUserCart,  setcartID } = useContext(cartContext);
  const { setwishlistCounter, getLoggedUserWishList } = useContext(wishListContext);

  async function getWishList() {
    const wishList = await getLoggedUserWishList();
    if (wishList.data.status == 'success') {
      setwishlistCounter(wishList.data.data.length)
    }

  }

  async function cartOfUser() {
    const theCart = await getUserCart();

    if (theCart.data.status == 'success') {

      setcartID(theCart.data.cartId);
      setcartCounter(theCart.data.numOfCartItems)
    }


  }
  useEffect(()=>{
    cartOfUser();
    getWishList();
  },[])
  return (
    <div>Categories</div>
  )
}

export default Categories