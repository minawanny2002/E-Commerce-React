import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../../Context/UserContext';
import navLogo from "./../../../public/freshcart-logo.svg"
import { wishListContext } from '../../Context/WishListContext';
import { cartContext } from '../../Context/CartContext';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCounter, setcartCounter } = useContext(cartContext);
  const { userToken, setuserToken } = useContext(userContext);
  const { wishlistCounter, setwishlistCounter } = useContext(wishListContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function logOut() {
    setuserToken(null);
    localStorage.removeItem('userToken');
  }
  return (
    <nav className="px-8  sticky top-0 right-0 left-0 z-40  bg-slate-900">
      <div className="flex flex-wrap items-center justify-between w-full py-3 lg:py-1 lg:px-8 ">
        <Link to="/" className="flex items-center w-[40%] lg:w-[15%] ">
          <img src={navLogo} alt="Logo" />
        </Link>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-transparent dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'max-h-screen  block' : 'max-h-0  hidden'} w-full lg:max-h-full lg:opacity-100 lg:block lg:w-[85%]`} id="navbar-default">
          <ul className="lg:h-[60px] flex flex-col p-4 mt-4 rounded-lg  bg-slate-900 lg:flex-row lg:mt-0 lg:border-0 lg:ml-4 lg:w-full lg:relative">
            {userToken ? (
              <>
                <li className='lg:ms-24' onClick={toggleMenu}>
                  <NavLink to="/" className="text-white text-lg block py-2 lg:py-0 px-3 w-full lg:me-0 rounded-xl lg:border-0">Home</NavLink>
                </li>
                <li className='lg:ms-5' onClick={toggleMenu}>
                  <NavLink to="brands" className="text-white text-lg block py-2 lg:py-0 px-3 w-full lg:me-0 rounded-xl lg:border-0 ">Brands</NavLink>
                </li>
                <li className='lg:ms-5' onClick={toggleMenu}>
                  <NavLink to="allorders" className="text-white text-lg block py-2 lg:py-0 px-3 w-full lg:me-0 rounded-xl lg:border-0 ">Orders</NavLink>
                </li>
                <li className='flex justify-between items-center lg:ms-5 ms-3'>
                  <i className="text-white fa-solid fa-earth-americas"></i>
                  <NavLink onClick={logOut} to="login" className="text-white text-lg block py-2 lg:py-0 px-3 w-full  rounded-xl lg:border-0 lg:p-1">Logout</NavLink>
                </li>
                <li className='lg:ms-5 ' onClick={toggleMenu}>
                  <NavLink to="cart" className="text-white text-lg block py-2 lg:py-0 px-3 w-full lg:me-0 rounded-xl lg:border-0 ">
                    <button type="button" className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none focus:ring-transparent ">
                      <i className="fa-solid fa-shopping-cart text-white text-xl"></i>
                      <span className="sr-only">Notifications</span>
                      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -end-2">{cartCounter}</div>
                    </button>
                  </NavLink>
                </li>
                <li onClick={toggleMenu}>
                  <NavLink to="wishlist" className="text-white text-lg block py-2 lg:py-0 px-3 w-full lg:me-0 rounded-xl lg:border-0 ">
                    <button type="button" className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-transparent">
                      <i className="fa-solid fa-heart text-white text-xl"></i>
                      <span className="sr-only">Notifications</span>
                      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500  rounded-full -top-2 -end-2">{wishlistCounter}</div>
                    </button>
                  </NavLink>
                </li>


              </>
            ) : <>
              <li className='lg:ms-24 ms-5 flex flex-row justify-between items-center'>
                <i className="text-white fa-solid fa-right-from-bracket"></i>
                <NavLink to="/login" className="text-white text-lg block py-2 lg:py-0 px-3 w-full lg:p-2 rounded-xl lg:border-0 ">Login</NavLink>
              </li>
              <li className='lg:ms-5 ms-5 flex justify-between items-center'>
              <i className="text-white fa-solid fa-note-sticky"></i>
                <NavLink to="/register" className="text-white text-lg block py-2 lg:py-0 px-3 w-full lg:p-2 rounded-xl lg:border-0 ">Register</NavLink>
              </li></>}
            <div className=' icons flex flex-col lg:flex-row justify-end py-5 px-0 lg:w-[45%] lg:absolute lg:right-0 lg:bottom-0 lg:top-0'>

              {/* <div className='flex flex-col lg:flex-row lg:items-center'>
                {!userToken ? (
                  <>
                    <NavLink to="/login" className="text-white text-lg block py-2 px-3 w-full lg:p-2 rounded-xl lg:border-0 ">Login</NavLink>
                    <NavLink to="/register" className="text-white text-lg block py-2 px-3 w-full lg:p-2 rounded-xl lg:border-0 ">Register</NavLink>
                  </>
                ) : null}
              </div> */}
              <div className='flex flex-row md:w-[100%] w-[100%] lg:w-[50%] justify-around items-center '>
                <a target='_blank' href="https://www.facebook.com"><i className='text-white fa-brands text-2xl cursor-pointer fa-facebook '></i></a>
                <a target='_blank' href="https://www.twitter.com"><i className=' text-white fa-brands text-2xl cursor-pointer fa-twitter '></i></a>
                <a target='_blank' href="https://www.linkedin.com"><i className='text-white fa-brands text-2xl cursor-pointer fa-linkedin '></i></a>
                <a target='_blank' href="https://www.instagram.com"><i className='text-white fa-brands text-2xl cursor-pointer fa-instagram '></i></a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar