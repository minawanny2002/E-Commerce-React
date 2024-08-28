import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { userContext } from '../../Context/UserContext';
import Navbar from '../Navbar/Navbar';

const ForgotPassword = () => {
    const [isLoading, setisLoading] = useState(false);
    const [resetCode, setresetCode] = useState(false);
    const [newPass, setnewPass] = useState(false);
    const { setuserToken } = useContext(userContext);
    const navigate = useNavigate();

    function myValidation1() {

        const validator = Yup.object().shape({
            email: Yup.string().email("Invalid Email").required("Required"),

        })
        return validator;
    }

    function myValidation3() {
        const validator = Yup.object().shape({
            email: Yup.string().email("Invalid Email").matches(/\.[a-z]{2,}$/, "Invalid Email").required("Required"),
            newPassword: Yup.string().matches(/[A-Z][a-z0-9]{5,10}$/, "Password Must Start With Uppercase Letter and From 6:10 Length").required("Required"),
            rePassword: Yup.string().oneOf([Yup.ref('newPassword')], "Password Don't Match").required("Required")
        })
        return validator;
    }


    function emailConfirmation(formValues) {
        setisLoading(true);
        console.log(formValues);

        axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', formValues)
            .then(function (apiResponse) {
                toast.success(apiResponse.data.message);
                // navigate('/')
                setisLoading(false);
                setresetCode(true);
            })
            .catch((apiResponse) => {

                toast.error("Invalid Email");
                setisLoading(false);

            })
    }
    function resetPassword(form2Values) {
        setisLoading(true)
        axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", form2Values)
            .then((apiResponse) => {
                toast.success(apiResponse.data.status);
                setisLoading(false)
                setnewPass(true);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
                setisLoading(false)
            })

    }

    function changePassword(form3values) {
        setisLoading(true)
        axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", {
            email: form3values.email,
            newPassword: form3values.newPassword,
        })
            .then((apiResponse) => {
                toast.success("Password Changed Successfully");
                localStorage.setItem('userToken', apiResponse.data.token);
                console.log(apiResponse.data.token);
                setuserToken(apiResponse.data.token);
                navigate('/');
                setisLoading(false)

            })
            .catch((error) => {
                // toast.error(error.response.data.message);
                setnewPass(false);
                setisLoading(false);
            })
    }

    const user1 = {
        email: "",
    }
    const myFormik1 = useFormik({
        initialValues: user1,
        validationSchema: myValidation1,
        onSubmit: emailConfirmation,
    })
    const user2 = {
        resetCode: "",
    }
    const myFormik2 = useFormik({
        initialValues: user2,
        onSubmit: resetPassword,
    })
    const user3 = {
        email: "",
        newPassword: "",
        rePassword: "",
    }
    const myFormik3 = useFormik({
        initialValues: user3,
        validationSchema: myValidation3,
        onSubmit: changePassword,
    })

    return (
        <>
            <Navbar />
            {!newPass ? <div className='h-[60vh] md:h-[70vh] lg:h-[90vh] flex flex-col items-center justify-center'>
                <form onSubmit={myFormik1.handleSubmit} className=" w-[80%] lg:w-[50%] mx-auto flex flex-col items-center justify-center ">
                    <h1 className='mx-auto text-center w-[100%] lg:w-[50%] font-bold text-[#0aad0a] text-4xl font-mono italic mt-5 mb-8 '>Reset Password</h1>
                    <div className="relative z-0 w-3/4 mb-8 group ">
                        <input onBlur={myFormik1.handleBlur} onChange={myFormik1.handleChange} value={myFormik1.values.email} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Email</label>
                    </div>
                    {myFormik1.touched.email && myFormik1.errors.email ? <><div className="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {myFormik1.errors.email}
                    </div></> : null}
                    {!resetCode ? <button type='submit' className=" text-white bg-gradient-to-r from-green-500  to-green-600 hover:bg-gradient-to-br focus:outline-none dark:focus:outline-none  shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2">{isLoading ? <><i className='fa-solid fa-spinner fa-spin text-white text-lg'></i></> : 'Send Confirmation Code'}</button> : null}
                </form>


                {resetCode ? <>
                    <form onSubmit={myFormik2.handleSubmit} className=" w-[80%] lg:w-[50%] mx-auto flex flex-col items-center justify-center ">
                        <div className="relative z-0 w-3/4 mb-8 group ">
                            <input onBlur={myFormik2.handleBlur} onChange={myFormik2.handleChange} value={myFormik2.values.email} type="resetCode" name="resetCode" id="resetcode" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
                            <label htmlFor="resetcode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Reset Code</label>
                        </div>
                        {myFormik2.touched.resetCode && myFormik2.errors.resetCode ? <><div className="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                            {myFormik2.errors.resetCode}
                        </div></> : null}
                        <button type='submit' className=" text-white bg-gradient-to-r from-green-500  to-green-600 hover:bg-gradient-to-br focus:outline-none dark:focus:outline-none  shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2">{isLoading ? <><i className='fa-solid fa-spinner fa-spin text-white text-lg'></i></> : 'Reset Password'}</button>
                    </form>

                </> : null}
            </div> : null}





            {newPass ? <div className='h-[60vh] md:h-[70vh] lg:h-[90vh] flex flex-col items-center justify-center'>
                <form onSubmit={myFormik3.handleSubmit} className=" w-[80%] lg:w-[50%] mx-auto flex flex-col items-center justify-center ">
                    <h1 className='mx-auto text-center w-[100%] lg:w-[60%] font-bold text-[#0aad0a] text-4xl font-mono italic mt-5 mb-8 '>Change Your Password</h1>
                    <div className="relative z-0 w-3/4 mb-8 group ">
                        <input onBlur={myFormik3.handleBlur} onChange={myFormik3.handleChange} value={myFormik3.values.email} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Email</label>
                    </div>
                    {myFormik3.touched.email && myFormik3.errors.email ? <><div className="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {myFormik3.errors.email}
                    </div></> : null}

                    <div className="relative z-0 w-3/4 mb-8 group ">
                        <input onBlur={myFormik3.handleBlur} onChange={myFormik3.handleChange} value={myFormik3.values.newPassword} type="password" name="newPassword" id="newPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
                        <label htmlFor="newPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">New Password</label>
                    </div>
                    {myFormik3.touched.newPassword && myFormik3.errors.newPassword ? <><div className="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {myFormik3.errors.newPassword}
                    </div></> : null}


                    <div className="relative z-0 w-3/4 mb-8 group ">
                        <input onBlur={myFormik3.handleBlur} onChange={myFormik3.handleChange} value={myFormik3.values.rePassword} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
                        <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Re-Password</label>
                    </div>
                    {myFormik3.touched.rePassword && myFormik3.errors.rePassword ? <><div className="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {myFormik3.errors.rePassword}
                    </div></> : null}
                    <button type='submit' className=" text-white bg-gradient-to-r from-green-500  to-green-600 hover:bg-gradient-to-br focus:outline-none dark:focus:outline-none  shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2">{isLoading ? <><i className='fa-solid fa-spinner fa-spin text-white text-lg'></i></> : 'Change Password'}</button>
                </form></div> : null}
        </>
    )
}

export default ForgotPassword