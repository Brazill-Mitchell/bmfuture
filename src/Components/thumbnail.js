import React from 'react';
import screenshot from './images/screenshot.jpg'
import './thumbnail.css';

function Thumbnail() {
  // Import result is the URL of your image
  return (
        <img className='img-fluid' src={screenshot}/>
  )
}

export default Thumbnail;