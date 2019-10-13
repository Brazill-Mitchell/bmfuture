import React, {useState} from 'react'
import webDevImg from './images/skills/webDevImg.png'
import androidImg from './images/skills/androidImg.png'
import reactImg from './images/skills/reactImg.png'
import javaImg from './images/skills/javaImg.png'


const Skills=(props)=>{

    let [isMenuDisplayed,setIsMenuDisplayed] = useState(false);
    
    return(
        <div>
            <div>Skills</div>
            {isMenuDisplayed
                ?<div className='skill-menu-wrapper'>
                    <div id='skill-menu'>
                        <div className='skill-img-container'>
                            <img className='img' src={webDevImg}></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img' src={androidImg}></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img' src={reactImg}></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img' src={javaImg}></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img' src={webDevImg}></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img' src={androidImg}></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img' src={reactImg}></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img' src={javaImg}></img>
                        </div>
                    </div>
                </div>



                :<div></div>
            }



        </div>
    )
}

export default Skills