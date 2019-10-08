import React, {useState,useRef,forwardRef} from 'react';
import full8Image from './images/connectX/full8.jpg'
import full14Image from './images/connectX/full14.jpg'
import full20Image from './images/connectX/full20.jpg'
import fullEmpty20Image from './images/connectX/fullEmpty20.jpg'

let full8 = {
  "image":full8Image,
  "description":
  
    <div className='desc-wrapper'>
      <div className='desc-normal'>
        This 2 player game is similar to Connect 4, except the players aren’t limited to 4. Any number of squares can be chosen as the winning amount, and the board can be set to any number of squares, making for a challenging and maybe impossible game of Connect X.
      </div>
      <div className='desc-head'>
        Key Component:
      </div>
      <div className='desc-head-2'>
        Consecutive Pattern Finding Algorithm:
      </div>
      <div className='desc-normal'>
        This algorithm will find any desired number of ordered squares, so that the game is not limited to a four square match.
      </div>
      {/* *See the algorithm here */}
      <a href='https://brazill-mitchell.github.io/chingu/' target='blank_'>
        <div className='desc-link'>Go: Connect X
          </div>
      </a>
    </div>

}
let full14 = {
  "image":full14Image,
  "description":
    <div className='desc-wrapper'>
      Web Post Image Description"
    </div>
}
let full20 = {
  "image":full20Image,
  "description":
    <div className='desc-wrapper'>
      Main Image Description
    </div>
  }
let fullEmpty20 = {
  "image":fullEmpty20Image,
  "description":
    <div className='desc-wrapper'>
      Responsive Image Description
    </div>
  }

let connectXThumbnailList = [full14,full20,fullEmpty20]

const ConnectX=forwardRef((props,ref)=> {

  let [displayImage,setDisplayImage] = useState(full8Image)
  let [displayImageDescription,setDisplayImageDescription] = useState(full8.description)
  let [isDefaultImage,setIsDefaultImage] = useState(true)

  function thumbnailHover(image){
    setDisplayImage(image.image)
    setDisplayImageDescription(image.description)
    setIsDefaultImage(false)
  }
  function imgDefault(){
    setDisplayImage(full8Image)
    setDisplayImageDescription(full8.description)
    setIsDefaultImage(true)
  }
  
  return (

    <div ref={props.refs.connectX} id='connectX' className='container-fluid h-50 mt-3'>
      <div className='row'>

      {/* Main Image */}
          <div className='col-sm-12 col-md-12 col-lg-6'>
            <a href='https://brazill-mitchell.github.io/chingu/' target='_blank'>
              <img className='img-main mx-auto w-75 mb-3' src={displayImage}></img>
            </a>
            
          </div>
      {/* Description */}
          <div className='project-desc-container my-auto col-sm-12 col-md-12 col-lg-6 mt-2'>
            <div className='project-desc my-auto'>
              <div className='desc-title'>
                Connect X
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