import React, { useEffect } from 'react'
import Designers from '../components/Designerss';
import HomeHero from '../components/HomeHero'
import SliderContainer from '../components/SliderContainer';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HomeHero />
      <Designers titleVisible={false} />
      <SliderContainer />
    </>
  )
};

export default Home