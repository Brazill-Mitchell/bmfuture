import React, {useState,useRef,forwardRef} from 'react';
import atomistLandingResponsiveImage from './images/atomist/atomistLandingResponsive.jpg'
import pricingResponsiveImage from './images/atomist/pricingResponsive.jpg'
import pricingImage from './images/atomist/pricing.jpg'
import atomistLandingImage from './images/atomist/atomistLanding.jpg'
import './Projects.css';

let atomistLanding = {
  "image":atomistLandingImage,
  "description":"Main Image Description"
}
let atomistLandingResponsive = {
  "image":atomistLandingResponsiveImage,
  "description":"Landing Image Description"
}
let pricingResponsive = {
  "image":pricingResponsiveImage,
  "description":"Pricing Responsive Image Description"
}
let pricing = {
  "image":pricingImage,
  "description":"Pricing Image Description"
}

let atomistThumbnailList = [atomistLandingResponsive,pricingResponsive,pricing]

const AtomistProject=forwardRef((props,ref)=> {

  let [displayImage,setDisplayImage] = useState(atomistLanding.image)
  let [displayImageDescription,setDisplayImageDescription] = useState(atomistLanding.description)


  function thumbnailHover(thumbnail){
    setDisplayImage(thumbnail.image)
    setDisplayImageDescription(thumbnail.description)
  }
  function imgDefault(){
    setDisplayImage(atomistLandingImage)
    setDisplayImageDescription(atomistLanding.description)
  }


  
  return (

        <div className='container-fluid h-50 mt-3'>
          <div className='row'>

          {/* Main Image */}
              <div ref={props.refs.refAtomist} id='atomist' className='col-sm-12 col-md-12 col-lg-6'>
              <a href='https://chingu-voyages.github.io/v8-toucans-team-04/' target='_blank'>
                <img className='img-main mx-auto mb-3 w-75' src={displayImage}></img>
              </a>
                
              </div>
          {/* Description */}
              <div className='col-sm-12 col-md-12 col-lg-6 my-auto'>
                <span>
                  {displayImageDescription}
                </span>
              </div>
          </div>

          {/* Thumbnails */}
          <div className='row mt-3' onMouseLeave={imgDefault}>
              {atomistThumbnailList.map((thumbnail,i) =>(
                <div className='mx-auto thumbnail' onMouseOver={() => thumbnailHover(thumbnail)} key={i}>
                  <img className='img' src={thumbnail.image}></img>
                </div>
              ))}
          </div>
        </div>
  )
})

export default AtomistProject;