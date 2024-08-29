import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import { userContext } from '../../Context/UserContext';
import * as Yup from 'yup';
import { cartContext } from '../../Context/CartContext';





const Checkout = () => {
    const [isLoading1, setisLoading1] = useState(false);
    const [isLoading2, setisLoading2] = useState(false);
    let baseUrl = 'https://minawanny2002.github.io/E-Commerce-React';
    let path = '/allorders';
    let finalUrl = `${baseUrl}/#${path}`;

    const { cartID, getUserCart, cartCounter, setcartCounter, deleteAllCart } = useContext(cartContext);
    function myValidation() {

        const validator = Yup.object().shape({

            phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "Enter Egyptian Phone Number").required("Required"),
            city: Yup.string().required("Required"),
        })
        return validator;
    }

    function checkout(formValues) {
        if (formValues.submitType === "cash") {
            console.log("cassssssssh");
            cashPayment(formValues);

        } else if (formValues.submitType === "online") {
            console.log("onlineeeeeeee");
            onlinePayment(formValues, "https://minawanny2002.github.io/E-Commerce-React/#");

        }

    }
    async function cartOfUser() {
        const theCart = await getUserCart();

        if (theCart.data.status == 'success') {

            setcartCounter(theCart.data.numOfCartItems)
        }


    }

    function cashPayment(formValues) {
        setisLoading1(true);
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartID}`,
            {
                "shippingAddress": {
                    details: formValues.details,
                    phone: formValues.phone,
                    city: formValues.city,
                }

            }, {
            headers: {
                token: localStorage.getItem('userToken'),
            }
        })
            .then((apiResponse) => {
                console.log(apiResponse);
                cartOfUser();
                toast.success("Cash Payment Done");
                delCart();
                setisLoading1(false)

            })
            .catch((error) => {
                toast.error("No Carts To Be Paid")
                setisLoading1(false)

            })
    }

    function onlinePayment(formValues, url) {
        setisLoading2(true);
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}?url=${url}`,
            {
                "shippingAddress": {
                    details: formValues.details,
                    phone: formValues.phone,
                    city: formValues.city,
                }

            }, {
            headers: {
                token: localStorage.getItem('userToken'),
            }
        })
            .then((apiResponse) => {
                if (apiResponse.data.status == 'success') {
                    console.log(apiResponse.data.session.url);
                    
                    window.location.href = apiResponse.data.session.url;
                }
                setisLoading2(false)
                // cartOfUser();
                // toast.success("Cash Payment Done");

            })
            .catch((error) => {
                setisLoading2(false)
                console.log(error);
                
                // toast.error("No Carts To Be Paid")

            })
    }
    async function delCart() {
        const response = await deleteAllCart();
        setmyCart(null);
        setcartPrice("0");
        setcartCounter("0");

    }


    const user = {
        details: "details",
        phone: "",
        city: "",
        submitType: "",
    }
    const myFormik = useFormik({
        initialValues: user,
        validationSchema: myValidation,
        onSubmit: checkout,
    })



    return (
        <div className='flex flex-col items-center justify-center h-[70vh]  md:h-[70vh] lg:h-[90vh]'>
            <h1 className='mx-auto text-center w-[80%] lg:w-[50%] font-bold text-[#0aad0a] text-4xl font-mono italic mt-5 mb-8 '>Checkout Details</h1>
            <form onSubmit={myFormik.handleSubmit} className=" w-[80%] lg:w-[50%] mx-auto flex flex-col items-center justify-center ">


                <div className="relative z-0 w-3/4 mb-5 group ">
                    <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.phone} type="text" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                </div>
                {myFormik.touched.phone && myFormik.errors.phone ? <><div className="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    {myFormik.errors.phone}
                </div></> : null}


                <div className="relative z-0 w-3/4 mb-1 group ">
                    <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.city} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
                    <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                </div>
                {myFormik.touched.city && myFormik.errors.city ? <><div className="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    {myFormik.errors.city}
                </div></> : null}
                <div className='flex flex-col lg:flex-row justify-center lg:w-[65%] lg:justify-between md:w-[65%] md:justify-between items-center'>
                    <button type='submit' onClick={() => myFormik.setFieldValue("submitType", "cash")} className="mt-5 text-white bg-gradient-to-r from-yellow-400  to-yellow-500 hover:bg-gradient-to-br focus:outline-none dark:focus:outline-none  shadow-lg shadow-yellow-400/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2">{isLoading1 ? <><i className='fa-solid fa-spinner fa-spin text-white text-lg'></i></> : 'Cash Payment'}</button>
                    <button type='submit' onClick={() => myFormik.setFieldValue("submitType", "online")} className="mt-5 text-white bg-gradient-to-r from-yellow-400  to-yellow-500 hover:bg-gradient-to-br focus:outline-none dark:focus:outline-none  shadow-lg shadow-yellow-400/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2">{isLoading2 ? <><i className='fa-solid fa-spinner fa-spin text-white text-lg'></i></> : 'Online Payment'}</button>
                </div>

            </form>
        </div>
    )
}

export default Checkout