import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GridLoader } from 'react-spinners';

const OrderProducts = () => {

    const { orderNumber } = useParams();
    const [isLoading, setisLoading] = useState(false)
    const [Products, setProducts] = useState(null);
    const { id } = jwtDecode(localStorage.getItem('userToken'));
    function getUserOrders() {
        setisLoading(true)
        axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
            .then((apiResponse) => {
                console.log(apiResponse.data[orderNumber].cartItems);
                setProducts(apiResponse.data[orderNumber].cartItems)
                setisLoading(false)

            })
            .catch((error) => {
                console.log(error);
                setisLoading(false)

            })
    }
    useEffect(() => {
        getUserOrders();
    }, [])
    return (
        <div>
            {isLoading ? <div className='z-50 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[0.8]'><GridLoader color={"#15803d"} loading={isLoading } size={40} /></div> : null}
            <div className="container p-10 md:p-16 lg:p-16">
                {Products ? Products.map((product, idx) => <div key={product._id} className="mb-5 p-4 rounded-lg w-full flex items-center justify-center bg-gray-100">
                    <div className="w-full flex flex-col md:flex-row lg:flex-row items-center  md:justify-center lg:justify-center bg-white p-4 rounded-lg shadow-md">
                        <img src={product.product.imageCover} alt="Woman Bordeaux Long Sleeve Blouse" className="h-[150px] rounded-lg" />
                        <div className="ml-4 flex flex-col items-center justify-center lg:block md:block md:flex-1 lg:flex-1 ">
                            <h3 className="text-lg font-medium text-center md:text-start lg:text-start mt-4">{product.product.title}</h3>
                            <p className="text-green-600 font-semibold mt-4 text-center md:text-start lg:text-start ">Price : {product.price} EGP</p>
                            <p className="text-green-600 font-semibold mt-4 text-center md:text-start lg:text-start ">Count : {product.count}</p>
                            
                        </div>
                    </div>

                </div>) : null}
            </div>


        </div >
    )
}

export default OrderProducts