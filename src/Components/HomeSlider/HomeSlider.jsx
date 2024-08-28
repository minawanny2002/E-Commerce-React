import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,   
        autoplay:true,
    };
    return (
        <>
            <div className="flex justify-center p-5 md:p-10 lg:p-10">
                <div className="slider-container w-3/4 ">
                    <Slider {...settings} className='block'>
                        <div>
                            <img className='w-full h-[300px]' src="src\assets\slider-image-1.jpeg" alt="" />
                        </div>
                        <div>
                            <img className='w-full h-[300px] ' src="src\assets\slider-image-2.jpeg" alt="" />
                        </div>
                        <div>
                            <img className='w-full h-[300px] ' src="src\assets\slider-image-3.jpeg" alt="" />
                        </div>
                    </Slider>
                </div>

                <div className='w-1/4 '>
                    <img src="src\assets\slider-image-1.jpeg" className='h-[150px] w-full' alt="" />
                    <img src="src\assets\slider-image-3.jpeg" className='h-[150px] w-full' alt="" />
                </div>
            </div>
        </>
    )
}

export default HomeSlider