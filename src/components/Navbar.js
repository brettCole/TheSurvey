import React from 'react';
import Logo from './Logo';
import SignupButton from './SignupButton';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoWithText">
        <Logo />
      </div>
        <SignupButton />
    </div>
  )
}

export default Navbar;