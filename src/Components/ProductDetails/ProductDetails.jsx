import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { cartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { wishListContext } from '../../Context/WishListContext';
import { GridLoader } from 'react-spinners';

const ProductDetails = () => {

    const [sameCatProd, setsameCatProd] = useState(null)
    const [theProduct, settheProduct] = useState(null)
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const urlParams = useParams();
    const { addProductToCart, getUserCart, cartCounter, setcartCounter, cartID, setcartID } = useContext(cartContext);
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
        else {
            addProductToWishlist(productId)
        }
    };


    function getProductDetails() {
        setloading(true);
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${urlParams.id}`)
            .then((apiResponse) => {
                settheProduct(apiResponse.data.data)
                getWishList();
                cartOfUser();
                setloading(false);

            })
            .catch((errors) => {
                setloading(false);
            })
    }
    function relatedProducts(category) {
        axios.get("https://ecommerce.routemisr.com/api/v1/products")
            .then((apiResponse) => {
                const realtedProducts = apiResponse.data.data.filter((product) => product.category.name === category);
                setsameCatProd(realtedProducts);

            })
            .catch((errors) => {

            })
    }
    async function addTocart(ID) {
        setloading(true);
        const response = await addProductToCart(ID);
        if (response.data.status == 'success') {
            setcartCounter(response.data.numOfCartItems)
            toast.success("Product Added To Cart")
        }
        setloading(false);

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

    async function addProductToWishlist(productID) {
        const wishList = await addToWishList(productID);
        if (wishList.data.status == 'success')
            console.log(wishList.data.data);
        {
            setwishlistCounter(wishList.data.data.length);
            toast.success("Product Added To Wishlist")

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
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
    useEffect(() => {
        getProductDetails();
        relatedProducts(urlParams.category)

    }, [urlParams.id])

    return (
        <div className='relative'>
            {loading ? <div className='z-50 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[0.8]'><GridLoader color={"#15803d"} loading={loading} size={40} /></div> : null}
            {theProduct ? <div className='flex flex-col justify-center items-center md:flex-row lg:flex-row p-10'>
                <div className='w-full md:w-5/12 lg:w-5/12'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {theProduct.images.map((img, idx) => <img key={idx} className='w-full h-[300px]' src={img} alt="product image" />)}
                        </Slider>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center w-full md:w-7/12 lg:w-7/12 p-5'>
                    <p className='font-bold w-full px-5 mb-5 mt-5 lg:mt-0 md:mt-0'>{theProduct.title}</p>
                    <p className='w-full px-5 text-gray-400 mb-5'>{theProduct.description}</p>

                    <div className='flex justify-between items-center w-full px-5'>
                        <p className='text-2xl font-bold text-gray-900 mb-5'>{theProduct
                            .price} <span className='text-green-600 text-lg'>EGP</span></p>

                        <div className="flex justify-center items-center mt-2.5 mb-5">
                            <svg className="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span className="text-lg font-semibold px-2.5 py-0.5 rounded  ms-2">{theProduct.ratingsAverage}</span>
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-full px-0 lg:px-6'>
                        <button onClick={() => addTocart(theProduct._id)} className=' w-3/4 px-6 md:px-8 lg:px-8 py-2 bg-green-700 hover:bg-green-800 rounded-md text-white'><i className="me-5 fa-solid fa-cart-shopping"></i>Add To Cart
                        </button>
                        <div className='w-1/4 flex justify-end items-center '>
                            <div className='w-1/5'><button className="w-full flex items-center justify-center font-medium rounded-lg text-sm px-5 py-2.5 text-center ">  <i className={`fa-regular fa-heart text-3xl cursor-pointer transition-colors duration-300 ease-in-out ${redHearts[theProduct._id] ? 'fa-solid text-red-500' : 'text-grey-900'}`}
                                onClick={() => handleClick(theProduct._id)}></i></button></div>
                        </div>
                    </div>
                </div>

            </div> : null}



            {/* realted products */}
            <div className='flex flex-wrap justify-center lg:p-10 p-5 gap-y-4 items-center '>
                {sameCatProd ? sameCatProd.map((product, idx) => <div key={idx} className='w-full border-2 rounded-xl p-3 md:border-0 md:p-0 lg:border-0 lg:p-0   md:w-1/3 lg:w-1/5 flex flex-wrap justify-center items-center'>
                    <div onClick={() => { navigate(`/productdetails/${product._id}/${product.category.name}`); }} className="w-full  md:h-[500px] lg:h-2/3 max-w-sm  bg-white   rounded-lg  md:border-none md:rounded-none md:shadow-none lg:border-none lg:rounded-none lg:shadow-none">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={product.images[0]} alt="product image" />
                        </a>
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
                    <div className='mt-5 flex flex-row justify-between items-center w-full px-5 md:px-5 lg:px-5'>
                        <div className='w-3/5 md:w-3/4 lg:w-3/4'><button onClick={() => { addTocart(product._id) }} className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-0 lg:px-6 py-2.5 text-center "><i className="fa-solid fa-cart-shopping me-5"></i>Add To Cart</button></div>
                        <div className='w-1/5'><button className="w-full flex items-center justify-center font-medium rounded-lg text-sm px-5 py-2.5 text-center ">  <i className={`fa-regular fa-heart text-3xl cursor-pointer transition-colors duration-300 ease-in-out ${redHearts[product._id] ? 'fa-solid text-red-500' : 'text-grey-900'}`}
                            onClick={() => handleClick(product._id)}></i></button></div>

                    </div>
                </div>) : null}
            </div>
        </div>
    )
}

export default ProductDetails