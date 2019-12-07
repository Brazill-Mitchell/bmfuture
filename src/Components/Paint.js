import React, {useState,useRef,forwardRef} from 'react';
import analysisImage from './images/paint/analysis.jpg'
import fullImage from './images/paint/full.jpg'
import fullEmptyImage from './images/paint/fullEmpty.jpg'
import paintStyleImage from './images/paint/paintStyle.jpg'
import githubImage from '../images/GitHub-Mark.png'


let full = {
  "image":fullImage,
  "description":
  <div className='desc-wrapper'>
    <div className='desc-head'>Key Aspects</div>
    <div className='desc-head-2'>Canvas</div>
    <div className='desc-normal'>
      This project is a simple paint application, created using the Canvas element. The user is able to choose the paint color, shape, and stroke size. They can even see an analysis of how the mouse’s position in the window relates to the canvas for an understanding of how the canvas functions.
    </div>
    <a href='https://brazill-mitchell.github.io/paint-app/' target='blank_'>
        <div className='desc-link'>Go: Paint</div>
    </a>
    <br></br>
    <a href='https://github.com/Brazill-Mitchell/paint-app' target='blank_'>
          <div className='mx-auto mt-1 item-bg-wrap nav-container-special'>
            <div className=''>
                <img className='contact-img' src={githubImage} alt=''></img>
            </div>
            <div className=''>Repo</div>
        </div> 
      </a>
  </div>
}
let analysis = {
  "image":analysisImage,
  "description":
    <div className='desc-wrapper'>
      <div className='desc-head-2'>
        Window Position
      </div>
      <div className='desc-normal'>
        See how the mouse position in the window relates to the canvas. 
      </div>
    </div>
}
let fullEmpty = {
  "image":fullEmptyImage,
  "description":
    <div className='desc-wrapper'>
      <div className='desc-head-2'>
        Responsive
      </div>
      <div className='desc-normal'>
        Resize the window to paint on any screen size(on desktop)
      </div>
    </div>
}
let paintStyle = {
  "image":paintStyleImage,
  "description":
    <div className='desc-wrapper'>
      <div className='desc-head-2'>
        Brush Select
      </div>
      <div className='desc-normal'>
        Select your brush size and color
      </div>
    </div>
}

let paintThumbnailList = [analysis,paintStyle,fullEmpty]

const Paint=forwardRef((props,ref)=> {

  let [displayImage,setDisplayImage] = useState(fullImage)
  let [displayImageDescription,setDisplayImageDescription] = useState(full.description)
  let [isDefaultImage,setIsDefaultImage] = useState(true)

  function thumbnailHover(image){
    setDisplayImage(image.image)
    setDisplayImageDescription(image.description)
    setIsDefaultImage(false)
  }
  function imgDefault(){
    setDisplayImage(fullImage)
    setDisplayImageDescription(full.description)
    setIsDefaultImage(true)
  }
  
  return (

    <div ref={props.refs.paint} id='paint' className='container-fluid mt-3'>
      <div className='row'>

      {/* Main Image */}
          <div className='col-sm-12 col-md-12 col-lg-6'>
            <a href='https://brazill-mitchell.github.io/paint-app/' target='_blank'>
              <img className='img-main mx-auto w-75 mb-3' src={fullImage} alt=''></img>
            </a>
            
          </div>
      {/* Description */}
          <div className='project-desc-container bg-text my-auto col-sm-12 col-md-12 col-lg-6 mt-2'>
            <div className='project-desc'>
              <div className='desc-title'>
                Paint
              </div>
              {displayImageDescription}
            </div>
            {isDefaultImage
                  ?<div></div>
                  :<div className=''>
                    <div>
                      <img className='img-desc mx-auto mb-3' src={displayImage} alt=''></img>
                    </div>
                  </div>
            }
          </div>
      </div>

      {/* Thumbnails */}
      <div className='row mt-3 thumbnail-container-tight' onMouseLeave={imgDefault}>
        {paintThumbnailList.map((thumbnail,i) =>(
          <div className='mx-auto thumbnail' onMouseOver={() => thumbnailHover(thumbnail)} key={i}>
            <img className='img' src={thumbnail.image} alt=''></img>
          </div>        
        ))}

      </div>
        
    </div>
  )
})

export default Paint;