import React from 'react';

const MainContentItem = (props) => {
  return (
    <span id={props.id}>{props.item}</span>
  )
}

export default MainContentItem;