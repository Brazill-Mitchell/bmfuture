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
            {/* <div className='intro-summary'>
                <div className='intro-desc'>Inspired to contribute to the world through technology</div>
            </div> */}
            <div className='bio-container bg-text'>
                <div className='bio-pic my-auto'>
                    <img className='bio-img' src={profilePic} alt=''></img>
                </div>
                <div className='bio-text-holder'>
                    <div className='bio-text'>
                        My name is Brazill.<br></br>
                        I'm a self taught React developer with experience in software development, including Java and Android. 
                        I earned a Bachelor's in Communications from Penn State University. 
                        Growing up, a career path as a developer had never been presented as an option, but the analytical mindset a developer needs was always present.
                        When I realized my passion for science and modern technology outweighed my great interest in art and cinema, I decided it was time to make the transition into technology. 
                        With little guidance, I researched intently and began teaching myself to code. 
                        Today, my goal is to become a someone who can reach out to young people who aren't aware of all their options, and help guide them in the right direction to achieve their goals, whether they be tech related or other.
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Intro