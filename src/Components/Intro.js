import React from 'react'
import profilePic from './images/profile-image.png'
import './Intro.css'

const Intro=()=>{

    return(
        <div className='intro-wrapper'>
            {/* <div className='intro-design-container'>
                <div className='intro-line-top'></div>
                <div className='intro-line-right'></div>
                <div className='intro-line-bottom'></div>
                <div className='intro-line-left'></div>
            </div> */}
            <div className='intro-summary'>
                <div className='intro-desc'>Inspired to contribute to the world through technology</div>
            </div>
            <div className='bio-container'>
                <div className='bio-pic'>
                    <img className='bio-img' src={profilePic} alt=''></img>
                </div>
                <div className='bio-text-holder'>
                    <div className='bio-text'>This is a placeholder for my biography.</div>
                </div>
            </div>

        </div>
    )
}
export default Intro