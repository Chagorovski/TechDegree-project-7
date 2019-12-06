import React from 'react';

// return image with props from parent component
const Photo = props => {
  return (
    <li>
      <img className="photo" src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt=""/>
    </li>
  )
}

export default Photo