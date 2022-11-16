import React from 'react'
import { NavLink } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from './Title';
import Line from './Line';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Description from './Description';

const LoginForm = () => {

  return (
    <div className='login-form-box'>
      <div className='hero-logo-box'>
        <img src='../images/logo.png' style={{ height: '60px' }} />
        <div className='hero-logo-title'>
          <Title
            textAlign="center"
            textColor="black"
            fontSize="30px"
            fontWeight="400"
            content="Dress Twin"
          />
        </div>
        <div className='hero-logo-desc'>
          <Description
            textColor="#444"
            textAlign="center"
            content="Luxury brands shopping community marketplace"
          />
        </div>
      </div>
      <Title
        textAlign="center"
        textColor="black"
        fontSize="30px"
        fontWeight="600"
        content="Login"
      />
      <br />
      <Line
        bgColor="black"
        justifyContent="center"
      />
      <form className='login-form'>
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} />
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} />
        <Button variant="contained" size="large" fullWidth={true}>Login</Button>
        <NavLink to="/forgot-your-password" className="form-link forgot-password-link">
          <span className='forgot-password'>Forgot your password?</span>
          <NavigateNextIcon />
        </NavLink>
        <NavLink to="/register" className="form-link register-link">
          <span className='forgot-password'>Register</span>
          <NavigateNextIcon />
        </NavLink>
      </form>
    </div>
  )
};

export default LoginForm