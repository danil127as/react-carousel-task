import React, { useEffect } from 'react'
import RegisterHero from '../components/RegisterHero';
import Designers from '../components/Designerss';
import YourBenefits from '../components/YourBenefits';
import FAQ from '../components/FAQ';

const Register = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <RegisterHero />
      <YourBenefits />
      <Designers titleVisible={true} />
      <FAQ />
    </>
  )
};

export default Register