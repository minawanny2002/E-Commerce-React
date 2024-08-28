import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

const CategorySlider = () => {
    const [allCategories, setallCategories] = useState(null);

    function getAllCategories() {
        axios.get("https://ecommerce.routemisr.com/api/v1/categories")
            .then((apiResponse) => {
                setallCategories(apiResponse.data.data);

            })
    }

    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    dots:true,
            
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots:false,
                }
            }
        ]
    };

    useEffect(() => {
        getAllCategories();
    }, [])
    return (
        <>
            <div className="conatiner p-5 md:p-10 lg:p-10">
                <h1 className='mb-5 text-2xl font-semibold '>Shop Popular Categories</h1>
                <div className="slider-container">
                    <Slider {...settings}>
                        {allCategories ? allCategories.map((catgeory, idx) => <div key={idx} ><img className='h-[200px] w-full' src={catgeory.image} />
                            <h2 className='text-green-600 text-center mt-2 mb-2'>{catgeory.name}</h2></div>) : null}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default CategorySlider