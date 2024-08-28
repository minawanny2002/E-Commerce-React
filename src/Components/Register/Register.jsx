import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate,Link } from 'react-router-dom';
import * as Yup from 'yup';
import { userContext } from '../../Context/UserContext';
import Navbar from '../Navbar/Navbar';

const Register = () => {

  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const{userToken , setuserToken} = useContext(userContext);
  function myValidation() {
    
    const validator = Yup.object().shape({
      name: Yup.string().min(3, "Must Be 3 Characters or More").max(15, "Must Be 15 Character or Less").required("Required"),
      email: Yup.string().email("Invalid Email").matches(/\.[a-z]{2,}$/,"Invalid Email").required("Required"),
      phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "Enter Egyptian Phone Number").required("Required"),
      password: Yup.string().matches(/[A-Z][a-z0-9]{5,10}$/, "Password Must Start With Uppercase Letter").required("Required"),
      rePassword: Yup.string().oneOf([Yup.ref('password')], "Password Don't Match").required("Required")
    })
    return validator;
  }
  function registerUser(formValues) {
    setisLoading(true);
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', formValues)
      .then((apiResponse => {
        toast.success("Acoount Created Successfully");
        setisLoading(false);
        setuserToken(apiResponse.data.token)
        localStorage.setItem('userToken' , apiResponse.data.token)
        navigate('/');
        

      }))
      .catch((apiResponse) => {
        setisLoading(false);
        toast.error(apiResponse?.response?.data?.message);
      })
    


  }
  const user = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  }
  const myFormik = useFormik({
    initialValues: user,
    validationSchema: myValidation,
    onSubmit: registerUser,
  })

  return (
    <>
      <Navbar/>
      <div className='h-[80vh] md:h-[80vh] lg:h-[90vh] flex flex-col items-center justify-center'>
      <h1 className='mx-auto text-center w-[80%] lg:w-[50%] font-bold text-[#0aad0a] text-4xl font-mono italic mt-5 mb-8 '>Register Now</h1>
      <form onSubmit={myFormik.handleSubmit} className="w-[80%] lg:w-[50%] mx-auto flex flex-col items-center justify-center ">
        <div className="relative z-0 w-3/4 mb-8 group ">
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.name} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 ">Name</label>
        </div>
        {myFormik.touched.name && myFormik.errors.name ? <><div class="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {myFormik.errors.name}
        </div></> : null}
        <div className="relative z-0 w-3/4 mb-8 group ">
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.email} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Email</label>
        </div>
        {myFormik.touched.email && myFormik.errors.email ? <><div class="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {myFormik.errors.email}
        </div></> : null}
        <div className="relative z-0 w-3/4 mb-8 group ">
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.phone} type="text" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
          <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Phone</label>
        </div>
        {myFormik.touched.phone && myFormik.errors.phone ? <><div class="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {myFormik.errors.phone}
        </div></> : null}
        <div className="relative z-0 w-3/4 mb-8 group ">
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Password</label>
        </div>
        {myFormik.touched.password && myFormik.errors.password ? <><div class="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {myFormik.errors.password}
        </div></> : null}
        <div className="relative z-0 w-3/4 mb-8 group ">
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.rePassword} type="password" name="rePassword" id="re-password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer rounded " />
          <label htmlFor="re-password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Re-Password</label>
        </div>
        {myFormik.touched.rePassword && myFormik.errors.rePassword ? <><div class="p-2 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {myFormik.errors.rePassword}
        </div></> : null}
        <button type='submit' className=" text-white bg-gradient-to-r from-green-500  to-green-600 hover:bg-gradient-to-br focus:outline-none dark:focus:outline-none  shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2">{isLoading ? <><i className='fa-solid fa-spinner fa-spin text-white text-lg'></i></> : 'Register'}</button>
        <p className='mt-2'>Already Have An Account ? <span className='font-bold text-green-600'><Link to={'/login'}>Log in</Link></span></p>  
      </form>
      </div>
    </>
  )
}

export default Register