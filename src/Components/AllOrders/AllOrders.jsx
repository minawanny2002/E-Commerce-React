import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import { wishListContext } from '../../Context/WishListContext';
import { GridLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';



const AllOrders = () => {

    const { setcartCounter,getUserCart, setcartID } = useContext(cartContext);
    const { setwishlistCounter,getLoggedUserWishList} = useContext(wishListContext);
    const { id } = jwtDecode(localStorage.getItem('userToken'));
    const navigate = useNavigate();

    function getUserOrders() {
        // setisLoading(true)
        return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
            // .then((apiResponse) => {
            //     console.log(apiResponse);
            //     setOrders(apiResponse.data)
            //     setisLoading(false)

            // })
            // .catch((error) => {
            //     console.log(error);
            //     setisLoading(false)

            // })
    }
    function displayOrderProducts(orderNumber) {
        console.log(orderNumber);
        navigate(`/orderproducts/${orderNumber}`)


    }
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
    const apiResponse = useQuery({
        queryKey: ['allOrders'],
        queryFn: getUserOrders,
    })
    useEffect(() => {
        getUserOrders();
        getWishList();
        cartOfUser();
    }, [])
    return (

        <div className='p-10'>
            {apiResponse?.isLoading ? <div className='z-50 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[0.8]'><GridLoader color={"#15803d"} loading={apiResponse.isLoading } size={40} /></div> : null}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Order Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Order Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Payment Method
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Payment Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delivery Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Order Products
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiResponse?.data?.data?.map((order, idx) => <tr key={idx} className="odd:bg-white  even:bg-gray-50  border-b ">
                            <th scope="row" className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap ">
                                {idx + 1}
                            </th>
                            <td className="px-6 py-4">
                                {order.totalOrderPrice}
                            </td>
                            <td className="px-6 py-4">
                                {order.paymentMethodType}
                            </td>
                            <td className="px-6 py-4">
                                {order.isPaid ? "Paid" : "Not Paid"}
                            </td>
                            <td className="px-6 py-4">
                                {order.isDelivered ? "Delivered" : "Not Delivered"}
                            </td>
                            <td className="px-1 md:px-0 lg:px-6 py-4">
                                <div onClick={() => displayOrderProducts(idx)} className='w-full lg:w-3/4 md:w-3/4'><button className="w-full  text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm py-2 text-center "><i className="fa-solid fa-money-bill-1 text-white me-3"></i>Products</button></div>
                            </td>
                        </tr>) }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllOrders