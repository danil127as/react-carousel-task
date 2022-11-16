import React, { useState } from 'react'
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '../pages/Home'
import Register from '../pages/Register'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Navigation = () => {

  const location = useLocation();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Register'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {
                text === 'Home' ? (
                  <HomeOutlinedIcon />
                ) : text === 'Register' ? (
                  <LockOpenOutlinedIcon />
                ) : (
                  <div />
                )
              }
            </ListItemIcon>
            <NavLink
              to={
                text === 'Home' ? (
                  '/'
                ) : text === 'Register' ? (
                  '/register'
                ) : (
                  '/'
                )
              }
              className='mobile-drawer-link'
            >
              <ListItemText primary={text} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <div className='app-logo' >
          <NavLink to="/">
            <img src='../images/logo.png' />
            <p>Dress Twin</p>
          </NavLink>
        </div>
        <div className='app-link'>
          <NavLink
            to="/"
            className={isActive => (location && location.pathname === '/' ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/register"
            className={isActive => (location && location.pathname === '/register' ? "active" : "")}
          >
            Register
          </NavLink>
        </div>

        <div className='mobile-drawer'>
          {(['left'] as Anchor[]).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon />
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default Navigation;
