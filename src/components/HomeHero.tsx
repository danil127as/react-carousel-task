import React from 'react'
import LoginForm from './LoginForm';
import HeroSlider from './HeroSlider';

const HomeHero = () => {

  const data = [
    {
      image: '../images/home-hero/home-hero1.jpg',
      name: 'susan andersen',
    },
    {
      image: '../images/home-hero/home-hero2.webp',
      name: 'susan andersen',
    },
    {
      image: '../images/home-hero/home-hero3.jpg',
      name: 'susan andersen',
    },
  ];

  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='hero-left'>
          <HeroSlider data={data} />
        </div>
        <div className='hero-right'>
          <LoginForm />
        </div>
      </div>
    </section>
  )
};

export default HomeHero
