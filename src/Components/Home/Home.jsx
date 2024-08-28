import React, { useContext } from 'react'
import { userContext } from '../../Context/UserContext';
import { ProductCard } from '../ProductCard/ProductCard';
import HomeSlider from '../HomeSlider/HomeSlider';
import CategorySlider from '../CategorySlider/CategorySlider';


const Home = () => {


  const { userToken, setuserToken } = useContext(userContext);
  return (
    <>
      <HomeSlider/>
      <CategorySlider/>
      <ProductCard/>
    </>
  )
}

export default Home