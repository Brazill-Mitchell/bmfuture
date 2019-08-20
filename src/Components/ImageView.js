import React, {useState,useRef,forwardRef} from 'react';
import './ImageView.css';
import screenshot from './images/screenshot.jpg'

const ImageView=(forwardRef)=>{
    return(
        <div>
            <img className='img-fluid' src={screenshot}></img>
        </div>
    )
}

export default ImageView