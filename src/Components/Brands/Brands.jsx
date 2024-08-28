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

    < div className='relative bg-black' >
      {/* <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>

         
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>


          <div
            className={`${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden transition-all duration-500 ease-in-out w-full md:w-auto md:flex md:items-center md:opacity-100 md:max-h-full md:transition-all`}
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 md:p-1 mt-4  rounded-lg bg-[#f8f8f8]  md:flex-row  md:mt-0 md:border-0 lg:ml-4 lg:w-full md:relative ">
              {userToken ? <><li onClick={toggleMenu}>
                <NavLink to="/" className="text-gray-500 text-lg block py-2 px-3 w-3/4 lg:w-full lg:p-2 rounded-xl  md:border-0  md:p-1 ">Home</NavLink>
              </li>


                <li onClick={toggleMenu}>
                  <NavLink to="brands" className="text-gray-500 text-lg block py-2 px-3 w-3/4 lg:w-full lg:p-2 rounded-xl  md:border-0  md:p-1 ">Brands</NavLink>
                </li>

                <li onClick={toggleMenu}>
                  <NavLink to="allorders" className="text-gray-500 text-lg block py-2 px-3 w-3/4 lg:w-full lg:p-2 rounded-xl  md:border-0  md:p-1 ">Orders</NavLink>
                </li>
                <li onClick={toggleMenu}>
                  <NavLink to="cart" className="text-gray-500 text-lg block py-2 px-3 w-3/4 lg:w-full lg:p-2 rounded-xl  md:border-0  md:p-1 ">
                    <button type="button" className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-transparent dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-transparent">
                      <i className="fa-solid fa-shopping-cart text-white text-xl"></i>
                      <span className="sr-only">Notifications</span>
                      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 ">{cartCounter}</div>
                    </button>
                  </NavLink>
                </li>
                <li onClick={toggleMenu}>
                  <NavLink to="wishlist" className="text-gray-500 text-lg block py-2 px-3 w-3/4 lg:w-full lg:p-2 rounded-xl  md:border-0  md:p-1 ">
                    <button type="button" className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-transparent dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-transparent">
                      <i className="fa-solid fa-heart text-white text-xl"></i>
                      <span className="sr-only">Notifications</span>
                      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 ">{wishlistCounter}</div>
                    </button>
                  </NavLink>
                </li></> : null}

              <div className='bg-red-400 icons felx flex-col  md:flex md:flex-row md:justify-between py-5 px-0  md:w-[45%] md:absolute md:right-0 md:bottom-0 md:top-0 '>
                <div className='flex flex-row  md:w-[70%] justify-around items-center'>
                  <i className='fa-brands fa-facebook  mx-2'></i>
                  <i className='fa-brands fa-twitter mx-2'></i>
                  <i className='fa-brands fa-linkedin mx-2'></i>
                  <i className='fa-brands fa-instagram mx-2'></i>
                </div>
                <div className='flex flex-col md:flex md:flex-row md:items-center'>
                  {!userToken ? <><NavLink to="/login" className="text-gray-500 text-lg block py-2 px-3 w-3/4 lgw-full lgp-2 rounded-xl  mdborder-0  md:p-1 ">Login</NavLink>
                    <NavLink to="/register" className="text-gray-500 text-lg block py-2 px-3 w-3/4 lg:w-full lg:p-2 rounded-xl  md:border-0  md:p-1 ">Register</NavLink></> : null}
                  {userToken ? <><NavLink onClick={logOut} to="login" className="text-gray-500 text-lg block py-2 px-3 w-3/4 lgw-full lgp-2 rounded-xl  mdborder-0  md:p-1 ">Logout</NavLink></> : null}

                </div>

              </div>
            </ul>
          </div>
        </div>
      </nav> */}













      {apiResponse.isLoading ? <div className='z-50 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[0.8]'><GridLoader color={"#15803d"} loading={apiResponse.isLoading} size={40} /></div> : null}
      <div className='gap-3 overflow-hidden flex flex-wrap justify-center lg:p-10 p-5 gap-y-4 items-center'>
        {apiResponse?.data?.data?.data.map((brand, idx) => <div key={idx} className='border  border-white rounded-xl w-full   md:w-1/3 lg:w-1/5 flex flex-wrap justify-center items-center'>

          <div className="w-full  md:h-2/3 lg:h-2/3 max-w-sm  bg-white   md:border-none md:rounded-none md:shadow-none lg:border lg:rounded-xl lg:shadow-lg">

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
