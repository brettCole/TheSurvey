import React from 'react';
import MainContentItem from './MainContentItem';
import github from '../assets/svg/github.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <MainContentItem 
        id="allSurveys" 
        item="ALL SURVEYS" 
      />
      <MainContentItem 
        id="mySurveys" 
        item="MY SURVEYS" 
      />
      <MainContentItem 
        id="myAccount" 
        item="MY ACCOUNT" 
      />
      <MainContentItem 
        id="projectRepo" 
        item={<img src={github} alt="github repo" />} 
      />
    </div>
  )
}

export default Sidebar;