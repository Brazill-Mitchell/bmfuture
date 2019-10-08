import React, {useState,useRef,forwardRef} from 'react';
import geckoLandingImage from './images/gecko/geckoLanding.jpg'
import webPostImage from './images/gecko/webPost.jpg'
import geckoMainImage from './images/gecko/geckoMain.jpg'
import geckoResponsiveImage from './images/gecko/geckoResponsive.jpg'
import signInImage from './images/gecko/signIn.jpg'
import './Projects.css'

let geckoLanding = {
  "image":geckoLandingImage,
  "description":

    <div>
      <div className='desc-normal'>
        Gecko Notes is a web based, mobile friendly note keeping app. It's simple interface makes it easy to store thoughts and ideas, and come back to them anytime, anywhere.
      </div>
      <div className='desc-head'>
        Key Components:
      </div>
      <div className='desc-head-2'>
        Firebase Authentication:
      </div>
      <div className='desc-normal'>
        Sign up & Sign in with a few simple clicks
      </div>
      <div className='desc-head-2'>
        Firebase Database:
      </div>
      <div className='desc-normal'>
        Store user data in the cloud & update in real time
      </div>
      <div className='desc-head-2'>
        SEO:
      </div>
      <div className='desc-normal'>
        Display image & description in search results and link sharing
      </div>
      <a href='https://geckonotes.firebaseapp.com' target='blank_'>
        <div className='desc-link'>Go: Gecko Notes
          </div>
      </a>
    </div>
}
let signIn = {
  "image":signInImage,
  "description":
    <div>
      <div className='desc-head-2'>
        Authentication
      </div>
      <div className='desc-normal'>
        Sign in using an existing Gmail account.
      </div>
    </div>
}
let webPost = {
  "image":webPostImage,
  "description":
    <div>
      <div className='desc-head-2'>
        SEO
      </div>
      <div className='desc-normal'>
        Display app description and thumbnail in search results and link sharing.
      </div>
    </div>
}
let geckoMain = {
  "image":geckoMainImage,
  "description":
    <div>
      <div className='desc-head-2'>
        Store & Edit Notes
      </div>
      <div className='desc-normal'>
        Users can create, update, and remove notes from their personal database.
      </div>
    </div>
}
let geckoResponsive = {
  "image":geckoResponsiveImage,
  "description":
    <div>
      <div className='desc-head-2'>
        Responsive
      </div>
      <div className='desc-normal'>
        The web app can adjust to any screen size.
      </div>
    </div>
}

let geckoThumbnailList = [signIn,webPost,geckoMain,geckoResponsive]

const Gecko=forwardRef((props,ref)=> {

  let [displayImage,setDisplayImage] = useState(geckoLandingImage)
  let [displayImageDescription,setDisplayImageDescription] = useState(geckoLanding.description)
  let [isDefaultImage,setIsDefaultImage] = useState(true)

  function thumbnailHover(image){
    setDisplayImage(image.image)
    setDisplayImageDescription(image.description)
    setIsDefaultImage(false)
    
  }
  function imgDefault(){
    setDisplayImage(geckoLandingImage)
    setDisplayImageDescription(geckoLanding.description)
    setIsDefaultImage(true)
  }


  
  return (

    <div ref={props.refs.gecko} id='gecko' className='container-fluid h-50 mt-3'>
      <div className='row'>

      {/* Main Image */}
          <div className='col-sm-12 col-md-12 col-lg-6'>
            <a href='https://geckonotes.firebaseapp.com' target='_blank'>
              <img className='img-main mx-auto w-75 mb-3' src={geckoLandingImage}></img>
            </a>
            
          </div>
      {/* Description */}
          <div className='project-desc-container col-sm-12 col-md-12 col-lg-6 mt-2'>
              <div className='project-desc'>
                <div className='desc-title'>
                  Gecko Notes
                </div>
                  {displayImageDescription}
              </div>

                {isDefaultImage
                  ?<div></div>
                  :<div className=''>
                      <div>
                        <img className='img-desc mx-auto mb-3' src={displayImage}></img>
                      </div>
                    </div>
                }

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