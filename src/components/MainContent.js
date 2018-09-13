import React from 'react';
import Sidebar from './Sidebar';
import CreateSurveyButton from './CreateSurvayButton';

const MainContent = () => {
  return (
    <div className="contentContainer">
      <Sidebar />
      <CreateSurveyButton />
    </div>
  )
}

export default MainContent;