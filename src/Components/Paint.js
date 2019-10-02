import React, {useState,useRef,forwardRef} from 'react';
import analysisImage from './images/paint/analysis.jpg'
import fullImage from './images/paint/full.jpg'
import fullEmptyImage from './images/paint/fullEmpty.jpg'
import paintStyleImage from './images/paint/paintStyle.jpg'

let full = {
  "image":fullImage,
  "description":
  <div className='desc'>
    <div className='desc-title'>
      Paint
    </div>
    <div className='desc-normal'>
    This project is a simple paint application, created using the Canvas element. The user is able to choose the paint color, shape, and stroke size. They can even see an analysis of how the mouse’s position in the window relates to the canvas for an understanding of how the canvas functions.
    </div>
  </div>
}
let analysis = {
  "image":analysisImage,
  "description":"Analysis Image Description"
}
let fullEmpty = {
  "image":fullEmptyImage,
  "description":"Main Image Description"
}
let paintStyle = {
  "image":paintStyleImage,
  "description":"Responsive Image Description"
}

let paintThumbnailList = [full,analysis,fullEmpty,paintStyle]

const Paint=forwardRef((props,ref)=> {

  let [displayImage,setDisplayImage] = useState(fullImage)
  let [displayImageDescription,setDisplayImageDescription] = useState(full.description)

  function thumbnailHover(image){
    setDisplayImage(image.image)
    setDisplayImageDescription(image.description)
  }
  function imgDefault(){
    setDisplayImage(fullImage)
    setDisplayImageDescription(full.description)
  }
  
  return (

    <div ref={props.refs.paint} id='paint' className='container-fluid h-50 mt-3'>
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
        {paintThumbnailList.map((thumbnail,i) =>(
          <div className='mx-auto thumbnail' onMouseOver={() => thumbnailHover(thumbnail)} key={i}>
            <img className='img' src={thumbnail.image}></img>
          </div>        
        ))}

      </div>
        
    </div>
  )
})

export default Paint;