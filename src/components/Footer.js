import React from 'react';
import LeftFooterLinks from './LeftFooterLinks';
import RightFooterLinks from './RightFooterLinks';
import MiddleIniative from './MiddleIniative';
import BottomWithLove from './BottomWithLove';

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <LeftFooterLinks />
        <MiddleIniative />
        <RightFooterLinks />
      </div>
      <BottomWithLove />
    </div>
  )
}

export default Footer;