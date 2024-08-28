import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import { userContext } from '../../Context/UserContext';
import Navbar from '../Navbar/Navbar';
import WebFont from 'webfontloader';







const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const { userToken, setuserToken } = useContext(userContext);


  function loginUser(formValues) {
    setisLoading(true);
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', formValues)
      .then(function (apiResponse) {
        toast.success("Successfully Logged in");
        setuserToken(apiResponse.data.token)
        localStorage.setItem('userToken', apiResponse.data.token)
        navigate('/')

        setisLoading(false);
      })
      .catch(function (apiResponse) {
        toast.error(apiResponse.response.data.message);
        setisLoading(false);
      })
  }


  const user = {
    email: "",
    password: "",
  }
  const myFormik = useFormik({
    initialValues: user,
    onSubmit: loginUser,
  })

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Playfair Display"]
      }
    });
  }, [])


  return (
    <>
      <Navbar />
      <div className='h-[80vh] md:h-[70vh] lg:h-[90vh] flex flex-col items-center justify-center'>
        <h1 className='playfair-display mx-auto text-center w-[80%] lg:w-[50%] font-bold text-[#0aad0a] text-4xl font-mono italic mt-5 mb-8 '>Login</h1>
        <form onSubmit={myFormik.handleSubmit} className=" w-[80%] lg:w-[50%] mx-auto flex flex-col items-center justify-center ">


          <div className="relative z-0 w-3/4 mb-8 group ">
            <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.email} type="text" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Email</label>
          </div>
          {myFormik.touched.email && myFormik.errors.email ? <><div className="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
            {myFormik.errors.email}
          </div></> : null}


          <div className="relative z-0 w-3/4 mb-1 group ">
            <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Password</label>
          </div>
          {myFormik.touched.password && myFormik.errors.password ? <><div className="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
            {myFormik.errors.password}
          </div></> : null}
          <p className='mt-1 w-3/4 mb-5 text-sm'>Forgot Your Password ? <span className='font-semibold text-green-600'><Link to={'/resetmail'}>Reset Password</Link></span></p>
          <button type='submit' className=" text-white bg-gradient-to-r from-green-500  to-green-600 hover:bg-gradient-to-br focus:outline-none dark:focus:outline-none  shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2">{isLoading ? <><i className='fa-solid fa-spinner fa-spin text-white text-lg'></i></> : 'Sign In'}</button>
          <p className='mt-2'>Dont Have Account ? <span className='font-bold text-green-600'><Link to={'/register'}>Register Now</Link></span></p>

        </form>
      </div>
    </>
  )
}

export default Login