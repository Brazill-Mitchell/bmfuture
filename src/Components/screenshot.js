import React from 'react';
import screenshot from './images/screenshot.jpg'
import './screenshot.css';

function ScreenShot() {
  // Import result is the URL of your image
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <img className='img-fluid' src={screenshot}/>
            </div>
        </div>
    </div>
  )
}

export default ScreenShot;