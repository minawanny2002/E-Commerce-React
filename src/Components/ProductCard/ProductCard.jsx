import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { wishListContext } from '../../Context/WishListContext';
import { ClipLoader, GridLoader } from 'react-spinners';


export const ProductCard = () => {

    const { addProductToCart, cartCounter, setcartCounter, getUserCart, cartID, setcartID } = useContext(cartContext);
    const { addToWishList, deleteProductFromWishList, wishlistCounter, setwishlistCounter, getLoggedUserWishList } = useContext(wishListContext);
    const [redHearts, setRedHearts] = useState({});
    const [wishList, setwishList] = useState(null)
    const [addCartLoading, setaddCartLoading] = useState(false)

    const handleClick = (productId) => {
        setRedHearts((prevState) => ({
            ...prevState,
            [productId]: !prevState[productId],
        }));

        if (redHearts[productId]) {
            deleteFromWishList(productId);
        }
        else{
            addProductToWishlist(productId)
        }
    };


    function getProducts() {
        getWishList();
        cartOfUser();
        return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }

    async function getWishList() {
        const wishList = await getLoggedUserWishList();
        if (wishList.data.status == 'success') {
            setwishlistCounter(wishList.data.data.length)
            setwishList(wishList.data.data)

            const wishListProducts = wishList.data.data;
            const updatedRedHearts = {};
            wishListProducts.forEach(product => {
                updatedRedHearts[product._id] = true;
            });
            setRedHearts(updatedRedHearts);

        }

    }
    async function deleteFromWishList(productID) {
        
        const wishList = await deleteProductFromWishList(productID);
        if (wishList.data.status == 'success') {
            setwishlistCounter(wishList.data.data.length);            
            toast.error("Product Removed");
            getWishList();
        }
        else {
            
        }

    }

    async function cartOfUser() {
        const theCart = await getUserCart();

        if (theCart.data.status == 'success') {

            setcartID(theCart.data.cartId);
            setcartCounter(theCart.data.numOfCartItems)
        }


    }

    async function addTocart(ID) {
        
        setaddCartLoading(true);
        const response = await addProductToCart(ID);
        if (response.data.status == 'success') {
            setcartCounter(response.data.numOfCartItems)
            toast.success("Product Added To Cart")

        }
        setaddCartLoading(false);

    }

    async function addProductToWishlist(productID) {
        const wishList = await addToWishList(productID);
        if (wishList.data.status == 'success')
        {
            setwishlistCounter(wishList.data.data.length);
            toast.success("Product Added To Wishlist")

        }

    }
    const apiResponse = useQuery({
        queryKey: ['allProducts'],
        queryFn: getProducts,
    })


    useEffect(() => {

        getProducts();
    }, [])
    return (
        <div className='relative'>
            {apiResponse.isLoading || addCartLoading ? <div className='z-50 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[0.8]'>  <GridLoader color={"#15803d"} loading={apiResponse.isLoading||setaddCartLoading} size={40} /></div> : null}
            <div className='overflow-hidden flex flex-wrap justify-center lg:p-10 p-5 gap-y-4 items-center'>
                {apiResponse?.data?.data?.data.map((product, idx) => <div key={idx} className='w-full border-2 rounded-xl p-3 md:border-0 md:p-0 lg:border-0 lg:p-0  md:w-1/3 lg:w-1/5 flex flex-wrap justify-center items-center'>
                    <Link to={`/productdetails/${product._id}/${product.category.name}`}>
                        <div className="w-full  md:h-[500px] lg:h-2/3 max-w-sm  bg-white   md:border-none md:rounded-none md:shadow-none lg:border-none lg:rounded-none lg:shadow-none">

                            <img className="p-8 rounded-t-lg" src={product.images[0]} alt="product image" />

                            <div className="px-5 pb-5">
                                <h6 className="text-sm tracking-tight text-green-600 ">{product.category.name}</h6>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{product.title.split(" ", 3).join(" ")}</h5>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>
                                    <span className="bg-green-100  font-semibold px-2.5 py-0.5 rounded  ms-3">{product.ratingsAverage}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-gray-900 ">{product.price} <span className='text-green-600 text-lg'>EGP</span> </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className='mt-5 flex flex-row justify-between items-center w-full px-5 md:px-5 lg:px-5 '>
                        <div className='w-3/5 md:w-3/4 lg:w-3/4'><button onClick={() => { addTocart(product._id) }} className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-0 lg:px-6 py-2.5 text-center "><i className="fa-solid fa-cart-shopping me-5"></i>Add To Cart</button></div>
                        <div className='w-1/5'><button className="w-full flex items-center justify-center font-medium rounded-lg text-sm px-5 py-2.5 text-center ">  <i className={`fa-regular fa-heart text-3xl cursor-pointer transition-colors duration-300 ease-in-out ${redHearts[product._id] ? 'fa-solid text-red-500' : 'text-grey-900'}`}
                            onClick={() => handleClick(product._id)}></i></button></div>
                    </div>
                </div>)}
            </div>
        </div >
    )
}
