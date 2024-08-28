import React, { useContext, useEffect, useState } from 'react'
import { wishListContext } from '../../Context/WishListContext'
import toast from 'react-hot-toast';
import { GridLoader } from 'react-spinners';

const WishList = () => {

    const { getLoggedUserWishList, deleteProductFromWishList ,wishlistCounter, setwishlistCounter} = useContext(wishListContext);
    const [myWishList, setmyWishList] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    async function getWishList() {
        setisLoading(true);
        const wishList = await getLoggedUserWishList();
        if (wishList.data.status == 'success') {
            // console.log(wishList.data.data);
            setwishlistCounter(wishList.data.data.length)
            setmyWishList(wishList.data.data)
            setisLoading(false);
        }
        else {
            setisLoading(false);
        }

    }

    async function deleteFromWishList(productID) {
        setisLoading(true);
        const wishList = await deleteProductFromWishList(productID);
        if (wishList.data.status == 'success') {
            console.log(wishList.data.data);
            setwishlistCounter(wishList.data.data.length);
            setisLoading(false);
            toast.error("Product Removed");
            getWishList();
        }
        else {
            setisLoading(false);
        }

    }

    
    useEffect(() => {
        getWishList();
    }, [])
    return (
        <>
            {isLoading ? <div className='z-50 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black opacity-[0.8]'><GridLoader color={"#15803d"} loading={isLoading } size={40} /></div> : null}
            <div className="container p-10 md:p-16 lg:p-16">
                <h2 className="text-5xl font-bold italic font-mono mb-4 text-center text-green-600">WishList</h2>

                {myWishList ? myWishList.map((product) => <div key={product._id} className="mb-5 p-4 rounded-lg w-full flex items-center justify-center bg-gray-100">
                    <div className="w-full flex flex-col md:flex-row lg:flex-row items-center md:justify-center lg:justify-center bg-white p-4 rounded-lg shadow-md">
                        <img src={product.imageCover} alt="Woman Bordeaux Long Sleeve Blouse" className="h-[150px] rounded-lg" />
                        <div className="ml-4 flex flex-col items-center justify-center lg:block md:block md:flex-1 lg:flex-1 ">
                            <h3 className="text-lg font-medium text-center md:text-start lg:text-start mt-4">{product.title}</h3>
                            <p className="text-green-600 font-semibold mt-4 text-center md:text-start lg:text-start ">Price : {product.price} EGP</p>
                            <button onClick={() => deleteFromWishList(product._id)} className="text-red-500 flex items-center mt-4 ">
                                <i className="fa-solid fa-trash-can text-red-600 me-3"></i>
                                <span className='text-red-600'>Remove</span>
                            </button>
                        </div>
                    </div>

                </div >) : null}
            </div>
        </>
    )
}

export default WishList