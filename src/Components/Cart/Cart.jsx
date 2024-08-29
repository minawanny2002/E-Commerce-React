import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom';
import { GridLoader } from 'react-spinners';


const Cart = () => {

  const [myCart, setmyCart] = useState(null);
  const [cartPrice, setcartPrice] = useState("0")
  const { getUserCart, updateProductCount, deleteCartItem, deleteAllCart ,cartCounter, setcartCounter,cartID, setcartID} = useContext(cartContext);
  const [isLoading, setisLoading] = useState(false)
  const [productCount, setproductCount] = useState(null)
  const navigate= useNavigate();

  async function cartOfUser() {
    setisLoading(true)
    const theCart = await getUserCart();
    
    
    if(theCart.data.status=='success' && theCart.data.numOfCartItems>0){

      setcartPrice(theCart.data.data.totalCartPrice);
      setmyCart(theCart.data.data.products);
      setcartCounter(theCart.data.numOfCartItems)
      setcartID(theCart.data.cartId);
    }
    setisLoading(false);

  }


  async function updateCount(ID, newCount) {
    setisLoading(true)
    const response = await updateProductCount(ID, newCount);
    setmyCart(response.data.data.products)
    setcartPrice(response.data.data.totalCartPrice)
    setcartCounter(response.data.numOfCartItems)
    setisLoading(false)

  }

  async function delItem(ID) {
    setisLoading(true);
    const response = await deleteCartItem(ID);
    setmyCart(response.data.data.products)
    setcartPrice(response.data.data.totalCartPrice)
    setcartCounter(response.data.numOfCartItems)
    if(response.data.numOfCartItems==0)
    {
      setmyCart(null);
      setcartPrice("0");
    }
    setisLoading(false)
  }

  async function delCart() {
    setisLoading(true);
    const response = await deleteAllCart();
    setmyCart(null);
    setcartPrice("0");
    setcartCounter("0");
    setisLoading(false);
    



  }
  function proceedToCheckout()
  {
    navigate('/checkout')
  }

  useEffect(() => {
    cartOfUser();


  }, [])
  return (
    <>
      {isLoading ? <div className='z-50 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[0.8]'><GridLoader color={"#15803d"} loading={isLoading } size={40} /></div> : null}
      <div className="container p-10 md:p-16 lg:p-16">
        <h2 className="text-5xl font-bold italic font-mono mb-4 text-center text-green-600">Cart</h2>
        <div className="text-center flex items-center justify-center mb-4">
          <span className="text-2xl text-center font-bold text-black">Total Cart Price : <span className='text-green-600'>{cartPrice ? cartPrice : null}</span></span>
        </div>
        {myCart ? myCart.map((product) => <div key={product._id} className="mb-5 p-4 rounded-lg w-full flex items-center justify-center bg-gray-100">
          <div className="w-full flex flex-col md:flex-row lg:flex-row items-center md:justify-center lg:justify-center bg-white p-4 rounded-lg shadow-md">
            <img src={product.product.imageCover} alt="Woman Bordeaux Long Sleeve Blouse" className="h-[150px] rounded-lg" />
            <div className="ml-4 flex flex-col items-center justify-center lg:block md:block md:flex-1 lg:flex-1 ">
              <h3 className="text-lg font-medium text-center md:text-start lg:text-start mt-4">{product.product.title}</h3>
              <p className="text-green-600 font-semibold mt-4 text-center md:text-start lg:text-start ">Price : {product.price} EGP</p>
              <button onClick={() => delItem(product.product._id)} className="text-red-500 flex items-center mt-4 ">
                <i className="fa-solid fa-trash-can text-red-600 me-3"></i>
                <span className='text-red-600'>Remove</span>
              </button>
            </div>
            <div className="flex items-center mt-4 ms-4">

              <button onClick={() => { updateCount(product.product._id, product.count + 1); }} className="bg-green-600 text-white px-2 py-1 rounded-md hover:bg-green-700">+</button>
              <span className="mx-2" id={product.product._id}>{product.count}</span>
              <button onClick={() => { updateCount(product.product._id, product.count - 1) }} className="bg-green-600 text-white px-2 py-1 rounded-md hover:bg-green-700">-</button>
            </div>
          </div>

        </div >) : null}

        {myCart ? <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center'>
          <div onClick={delCart} className='px-10 w-full'><button className="w-full mb-3 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "><i className="fa-solid fa-trash-can text-white me-3"></i>Clear All Cart</button></div>
          <div onClick={proceedToCheckout} className='px-10 w-full'><button className="w-full mb-3 text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "><i className="fa-solid fa-money-bill-1 text-white me-3"></i>Proceed To Checkout</button></div>
          
        </div> : null}
      </div>
    </>
  )
}

export default Cart