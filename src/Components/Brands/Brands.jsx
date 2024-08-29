import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../Context/CartContext';
import { wishListContext } from '../../Context/WishListContext';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';
import { userContext } from '../../Context/UserContext';

const Brands = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setcartCounter, getUserCart, setcartID } = useContext(cartContext);
  const { setwishlistCounter, getLoggedUserWishList } = useContext(wishListContext);
  const { userToken } = useContext(userContext);
  const { cartCounter } = useContext(cartContext);
  const { wishlistCounter } = useContext(wishListContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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


  function getBrands() {
    // setisLoading(true);
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    // .then((apiResponse) => {
    //   console.log(apiResponse.data.data);
    //   setBrands(apiResponse.data.data);
    //   setisLoading(false);
    // })
    // .catch((error) => {
    //   console.log(error);
    //   setisLoading(false);

    // })
  }
  const apiResponse = useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
  })


  useEffect(() => {
    getBrands();
    cartOfUser();
    getWishList();
  }, [])
  function logOut() {
    setuserToken(null);
    localStorage.removeItem('userToken');
  }
  return (

    < div className='relative' >
      

      {apiResponse.isLoading ? <div className='z-50 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[0.8]'><GridLoader color={"#15803d"} loading={apiResponse.isLoading} size={40} /></div> : null}
      <div className='gap-3 overflow-hidden flex flex-wrap justify-center lg:p-10 p-5 gap-y-4 items-center'>
        {apiResponse?.data?.data?.data.map((brand, idx) => <div key={idx} className='border-2  border-black rounded-xl w-full   md:w-1/3 lg:w-1/5 flex flex-wrap justify-center items-center'>

          <div className="border-2  border-black rounded-lg w-full  md:h-2/3 lg:h-2/3 max-w-sm  bg-white ">

            <img className="p-8 rounded-t-lg" src={brand.image} alt="brand image" />

            <div className="px-5 pb-5">

              <h5 className="text-lg font-mono font-bold text-center tracking-tight text-green-600 ">{brand.name}</h5>

            </div>
          </div>


        </div>)}
      </div>
    </div >
  );
};

export default Brands;
