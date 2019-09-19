import React, {useState,useRef,forwardRef} from 'react';
import phila from './images/phila.jpg'
import geckoLandingImage from './images/gecko/geckoLanding.jpg'
import webPostImage from './images/gecko/webPost.jpg'
import geckoMainImage from './images/gecko/geckoMain.jpg'
import geckoResponsiveImage from './images/gecko/geckoResponsive.jpg'
import signInImage from './images/gecko/signIn.jpg'

import './Projects.css';

let geckoLanding = {
  "image":geckoLandingImage,
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
let signIn = {
  "image":signInImage,
  "description":"Sign In Image Description"
}
let webPost = {
  "image":webPostImage,
  "description":"Web Post Image Description"
}
let geckoMain = {
  "image":geckoMainImage,
  "description":"Main Image Description"
}
let geckoResponsive = {
  "image":geckoResponsiveImage,
  "description":"Responsive Image Description"
}

let geckoThumbnailList = [signIn,webPost,geckoMain,geckoResponsive]

const Gecko=forwardRef((props,ref)=> {

  let [displayImage,setDisplayImage] = useState(geckoLandingImage)
  let [displayImageDescription,setDisplayImageDescription] = useState(geckoLanding.description)

  function thumbnailHover(image){
    setDisplayImage(image.image)
    setDisplayImageDescription(image.description)
  }
  function imgDefault(){
    setDisplayImage(geckoLandingImage)
    setDisplayImageDescription(geckoLanding.description)
  }
  
  return (

    <div ref={props.refs.gecko} id='gecko' className='container-fluid h-50 mt-3'>
      {/* <div className='bg-container'><img className='bg-project' src={phila}/></div> */}
      <div className='row'>

      {/* Main Image */}
          <div className='col-sm-12 col-md-12 col-lg-6'>
            <a href='https://geckonotes.firebaseapp.com' target='_blank'>
              <img className='img-main mx-auto w-75 mb-3' src={displayImage}></img>
            </a>
            
          </div>
      {/* Description */}
          <div className='project-desc-container my-auto col-sm-12 col-md-12 col-lg-6 mt-2'>
            <div className='project-desc my-auto'>
              {displayImageDescription}
            </div>
          </div>
      </div>

      {/* Thumbnails */}
      <div className='row mt-3' onMouseLeave={imgDefault}>
        {geckoThumbnailList.map((thumbnail,i) =>(
          <div className='mx-auto thumbnail' onMouseOver={() => thumbnailHover(thumbnail)} key={i}>
            <img className='img' src={thumbnail.image}></img>
          </div>        
        ))}

      </div>
        
    </div>
  )
})

export default Gecko;