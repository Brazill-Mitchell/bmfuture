import React, {useState,useEffect} from 'react'
import webDevImg from './images/skills/webDevImg.png'
import androidImg from './images/skills/androidImg.png'
import reactImg from './images/skills/reactImg.png'
import javaImg from './images/skills/javaImg.png'
import excelImg from './images/skills/excelImg.png'
import photoshopImg from './images/skills/photoshopImg.png'
import premiereImg from './images/skills/premiereImg.png'
import aeImg from './images/skills/aeImg.png'
import './Skills.css'





const Skills=(props)=>{

    let [isMenuDisplayed,setIsMenuDisplayed] = useState(false);

    function handleMouseOver(){
        props.setNavActive()
        props.toggleMenu('skills')
        setIsMenuDisplayed(true)
        console.log('mouseover')
    }
    function handleMouseLeave(){
        props.toggleMenu('none')
        console.log('mouse leave')
    }
    
    // Close projects menu if another element is active
    function checkMenu(){
        if (props.menu !== 'skills' || props.navState === false){
            setIsMenuDisplayed(false)
            
        }else if(props.menu === 'skills'){
            
        }
    }

    useEffect(()=>{
        checkMenu()
    })
    
    return(
        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <div className='skill-menu-container'>Skills</div>
            {isMenuDisplayed
                ?<div className='drop-menu'>
                    <div id='skills-holder'>
                        <div className='w-100 mb-2'><span className='drop-menu-label'>Developer</span></div>
                        <div className='skill-img-container'>
                            <img className='img skill-img' src={webDevImg} alt=''></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img skill-img' src={androidImg} alt=''></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img skill-img' src={reactImg} alt=''></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img skill-img' src={javaImg} alt=''></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img skill-img' src={excelImg} alt=''></img>
                        </div>
                        <div className='w-100 mb-2'><span className='drop-menu-label'>Multimedia</span></div>
                        <div className='skill-img-container'>
                            <img className='img skill-img' src={aeImg} alt=''></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img skill-img' src={premiereImg} alt=''></img>
                        </div>
                        <div className='skill-img-container'>
                            <img className='img skill-img' src={photoshopImg} alt=''></img>
                        </div>
                    </div>
                </div>



                :<div></div>
            }



        </div>
    )
}

export default Skills