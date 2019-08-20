import React, {useState,useRef,forwardRef} from 'react';
import screenshot from './images/screenshot.jpg'
import geckoLanding from './images/gecko/geckoLanding.jpg'
import webPost from './images/gecko/webPost.jpg'
import geckoMain from './images/gecko/geckoMain.jpg'
import geckoResponsive from './images/gecko/geckoResponsive.jpg'
import signIn from './images/gecko/signIn.jpg'
import atomistLandingResponsive from './images/atomist/atomistLandingResponsive.jpg'
import pricingResponsive from './images/atomist/pricingResponsive.jpg'
import pricing from './images/atomist/pricing.jpg'
import atomistLanding from './images/atomist/atomistLanding.jpg'

import './GeckoImages.css';

let geckoThumbnailList = [geckoLanding,webPost,geckoMain,geckoResponsive,signIn]
let atomistThumbnailList = [atomistLandingResponsive,pricingResponsive,pricing,atomistLanding]

const GeckoImages=forwardRef((props,ref)=> {
  // Import result is the URL of your image
  let refsignIn = useRef(null)

  return (
        // <img className='img-fluid' src={screenshot}/>

        <div className='container-fluid h-50 mt-3'>
          <div className='row'>
            {geckoThumbnailList.map(image =>(
              <div className='col-2'>
                <img className='img-fluid mx-auto' src={image}></img>
              </div>
            ))}
          </div>
        </div>
  )
})

export default GeckoImages;