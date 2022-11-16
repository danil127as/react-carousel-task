import React from 'react'
import { NavLink } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from './Title';
import Line from './Line';
import Description from './Description';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const RegisterForm = () => {

  return (
    <div className='login-form-box'>
      {/* <img src='../images/logo.png' className='register-page-logo' /> */}
      <Title
        textAlign="center"
        textColor="black"
        fontSize="30px"
        fontWeight="600"
        content="Your code is the key"
      />
      <br />
      <Line
        bgColor="black"
        justifyContent="center"
      />
      <Description 
        textColor="black"
        textAlign="center"
        content="Reveal the best-kept secret of the fashion industry."
      />
      <form className='login-form register-page'>
        <TextField id="outlined-basic" label="Enter your code" variant="outlined" fullWidth={true} />
        <Button variant="contained" size="large" fullWidth={true}>Register Now</Button>
        <NavLink to="/" className='form-link already-registered'>
          <span>Already registered? Login</span>
          <NavigateNextIcon />
        </NavLink>
        <a href="https://youtube.com" target="_blank" className='form-link fill-form-to-request'>
          <span>Fill the form to request code.</span>
        </a>
      </form>
    </div>
  )
};

export default RegisterForm