import React, {useState,useRef,forwardRef} from 'react';
import full8Image from './images/connectX/full8.jpg'
import full14Image from './images/connectX/full14.jpg'
import full20Image from './images/connectX/full20.jpg'
import fullEmpty20Image from './images/connectX/fullEmpty20.jpg'

let full8 = {
  "image":full8Image,
  "description":"Sign In Image Description"
}
let full14 = {
  "image":full14Image,
  "description":"Web Post Image Description"
}
let full20 = {
  "image":full20Image,
  "description":"Main Image Description"
}
let fullEmpty20 = {
  "image":fullEmpty20Image,
  "description":"Responsive Image Description"
}

let connectXThumbnailList = [full8,full14,full20,fullEmpty20]

const ConnectX=forwardRef((props,ref)=> {

  let [displayImage,setDisplayImage] = useState(full8Image)
  let [displayImageDescription,setDisplayImageDescription] = useState(full8.description)

  function thumbnailHover(image){
    setDisplayImage(image.image)
    setDisplayImageDescription(image.description)
  }
  function imgDefault(){
    setDisplayImage(full8Image)
    setDisplayImageDescription(full8.description)
  }
  
  return (

    <div ref={props.refs.connectX} id='connectX' className='container-fluid h-50 mt-3'>
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
        {connectXThumbnailList.map((thumbnail,i) =>(
          <div className='mx-auto thumbnail' onMouseOver={() => thumbnailHover(thumbnail)} key={i}>
            <img className='img' src={thumbnail.image}></img>
          </div>        
        ))}

      </div>
        
    </div>
  )
})

export default ConnectX;