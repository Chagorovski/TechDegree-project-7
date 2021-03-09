import React from 'react';
import Photo from './Photo';
import NoResult from './NoResult';


const PhotoContainer = props => {
  // variables to store props and photos
  const results = props.data;
  let photos;

  if (results.length > 0) {
    photos = results.map( photo => <Photo {...photo} key={photo.id} />);
  } else {
    photos = <NoResult />
  }

  return (
    <div className="photo-container">
      <h2>{ props.query }</h2>
        <ul>
          { photos } 
        </ul>
    </div>
  );
}

export default PhotoContainer;