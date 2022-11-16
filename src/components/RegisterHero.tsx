import React from 'react'
import RegisterForm from './RegisterForm';
import HeroSlider from './HeroSlider';

const RegisterHero = () => {

  const data = [
    {
      image: '../images/register-hero/register-hero1.jpg',
      name: 'susan andersen',
    },
    {
      image: '../images/register-hero/register-hero2.webp',
      name: 'susan andersen',
    },
    {
      image: '../images/register-hero/register-hero3.jpg',
      name: 'susan andersen',
    },
  ];

  return (
    <section className='register-hero-section'>
      <div className='register-hero-container'>
        <div className='register-hero-left'>
          <HeroSlider data={data} />
        </div>
        <div className='register-hero-right'>
          <RegisterForm />
        </div>
      </div>
    </section>
  )
};

export default RegisterHero