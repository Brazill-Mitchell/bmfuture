import React, {useState,useEffect,forwardRef} from 'react';
import atomistLandingResponsiveImage from './images/atomist/atomistLandingResponsive.jpg'
import pricingResponsiveImage from './images/atomist/pricingResponsive.jpg'
import pricingImage from './images/atomist/pricing.jpg'
import atomistLandingImage from './images/atomist/atomistLanding.jpg'

let atomistLanding = {
  "image":atomistLandingImage,
  "description":
    <div className='desc-wrapper'>
      <div className='desc-normal'>This Cloned website was a Developer Team project as a part of Chingu, a community of growing developers.</div>
      <span className='desc-head'>Key Aspects</span><br></br>
      <span className='desc-head-2'>International Developer Team</span><br></br>
      <span className='desc-normal'>Worked remotely with developers from Venezuela and Nicaragua</span><br></br>
      <span className='desc-head-2'>Agile Principles</span><br></br>
      <span className='desc-normal'>Utilized Agile workflow to optimize effectiveness in a team environment.</span><br></br>
      <span className='desc-normal'>Self assigned tasks from a Backlog</span><br></br>
      <span className='desc-normal'>Held Weekly Scrum meetings </span><br></br>
      <span className='desc-normal'>Performed consistent project updates via Github</span><br></br>
    </div>
}
let atomistLandingResponsive = {
  "image":atomistLandingResponsiveImage,
  "description":
    <div className='desc-wrapper'>
      <div className='desc-head-2'>
        Responsive
      </div>
      <div className='desc-normal'>
        Made the site responsive to any screen size.
      </div>
    </div>
}
let pricingResponsive = {
  "image":pricingResponsiveImage,
  "description":
    <div className='desc-wrapper'>
      <div className='desc-head-2'>
        Pricing Page
      </div>
      <div className='desc-normal'>
        Built a Responsive Pricing Page and Navigation Bar using Bootstrap.
      </div>
    </div>
}
let pricing = {
  "image":pricingImage,
  "description":
    <div className='desc-wrapper'>
      <div className='desc-head-2'>
        Pricing Page
      </div>
      <div className='desc-normal'>
        Built a Responsive Pricing Page and Navigation Bar using Bootstrap.
      </div>
    </div>
}

let atomistThumbnailList = [atomistLandingResponsive,pricingResponsive,pricing]

const AtomistProject=forwardRef((props,ref)=> {

  let [displayImage,setDisplayImage] = useState(atomistLanding.image)
  let [displayImageDescription,setDisplayImageDescription] = useState(atomistLanding.description)
  let [isDefaultImage,setIsDefaultImage] = useState(true)


  function thumbnailHover(thumbnail){
    setDisplayImage(thumbnail.image)
    setDisplayImageDescription(thumbnail.description)
    setIsDefaultImage(false)
  }
  function imgDefault(){
    setDisplayImage(atomistLandingImage)
    setDisplayImageDescription(atomistLanding.description)
    setIsDefaultImage(true)
  }


  
  return (

        <div ref={props.refs.atomist} id='atomist' className='container-fluid h-100 mt-3'>
          <div className='row h-100'>

            <div className='desc-img-wrapper'>
            


            
            </div>
            {/* Main Image */}
              <div className='col-sm-12 col-md-12 col-lg-6'>
                <a href='https://chingu-voyages.github.io/v8-toucans-team-04/' target='_blank'>
                  <img className='img-main mx-auto mb-3 w-75' src={displayImage}></img>
                </a>
              </div>
            {/* Description */}
              <div className='project-desc-container my-auto col-sm-12 col-md-12 col-lg-6 mt-2'>
                <div className='project-desc my-auto'>
                  <div className='desc-title'>Atomist</div>
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