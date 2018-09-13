import React from 'react';
import ztmLogo from '../assets/img/ZTM.jpg';

const MiddleIniative = () => {
  return (
    <div className="middleText">
      <div className="initiative">
        <span>An Initiative Of :</span>
      </div>
      <div className="ztmLogo">
        <img src={ztmLogo} alt="Zero To Mastery Community" />
      </div>
    </div>
  )
}

export default MiddleIniative;