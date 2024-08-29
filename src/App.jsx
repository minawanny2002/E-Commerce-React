import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Brands from './Components/Brands/Brands'
import Categories from './Components/Categories/Categories'
import Cart from './Components/Cart/Cart'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import { Toaster } from 'react-hot-toast'
import UserContextProvider from './Context/UserContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from './Context/CartContext'
import WishList from './Components/WishList/WishList'
import WishListContextProvider from './Context/WishListContext'
import EnterresetMail from './Components/ForgotPassword/ForgotPassword'
import Checkout from './Components/Checkout/Checkout'
import AllOrders from './Components/AllOrders/AllOrders'
import Error from './Components/Error/Error'
import OrderProducts from './Components/OrderProducts/OrderProducts'





function App() {
  const myRouter = createHashRouter([
    {
      
      path: "",
      element: <Layout />,
      errorElement:<Error/>,
      children: [
        
        { path: "", element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: "brands", element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: "categories", element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: "wishlist", element: <ProtectedRoute><WishList /></ProtectedRoute> },
        { path: "checkout", element: <ProtectedRoute><Checkout /></ProtectedRoute> },
        { path: "allorders", element: <ProtectedRoute><AllOrders /></ProtectedRoute> },
        { path: "orderproducts/:orderNumber", element: <ProtectedRoute><OrderProducts /></ProtectedRoute> },  
        { path: "productdetails/:id/:category", element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
      ]
    },
    { path: "resetmail", element: <EnterresetMail />},
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
  ])

  const reactQuery = new QueryClient();
  return (
    <>
      <QueryClientProvider client={reactQuery}>
        <UserContextProvider >
          <CartContextProvider>
            <WishListContextProvider>
              <Toaster />
              <ReactQueryDevtools />
              <RouterProvider  router={myRouter} />
            </WishListContextProvider>
          </CartContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
