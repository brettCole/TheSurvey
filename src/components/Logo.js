import React from 'react';
import logo from '../assets/svg/logo.svg';

const Logo = () => {
  return (
    <React.Fragment>
      <div className="logo">
        <img src={logo} alt="Logo of The Survey" />
      </div>
      <div className="text">
        <span className="survey">
          The Survey
        </span>
      </div>
    </React.Fragment>
  )
}

export default Logo;