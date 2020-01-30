import React, { Component, useState,useEffect } from 'react'
import profilePic from './images/profile-image.png'
import './Intro.css'
const manager = require('./manager.js')

const Intro=(props)=>{

    
    const [introDetachedClass, setIntroDetachedClass] = useState('intro-detached')
    const [introDetached,setIntroDetached] = useState(false)
    function handleLayout(screenSize){
        // console.log('Handle Screen: ' + screenSize)
        if(screenSize === manager.responsive.xl || screenSize === manager.responsive.computer){
            if ( introDetached ){
                if (introDetached !== false){
                    setIntroDetached(false)
                }
                // console.log(screenSize)
            }
            hideIntro()
        }else if(screenSize === manager.responsive.tablet || screenSize === manager.responsive.mobile){
                if (introDetached !== true){
                    setIntroDetached(true)
                }
            }
            // Handle Intro Detached for Mobile
            if(screenSize === 'mobile'){
                if (introDetachedClass !== 'intro-detached-mobile'){
                    setIntroDetachedClass('intro-detached-mobile')
                }
            }else{
                if (introDetachedClass !== 'intro-detached'){
                    setIntroDetachedClass('intro-detached')
                }
            }
    }

    function hideIntro(){
        props.setDetachedIntroShown(false)
    }
    function showIntro(){
        props.setDetachedIntroShown(true)
    }
// Jump to Connect X 
    function scrollToProject(project){
        try{
            window.scrollTo(0,(props.refs['connectX'].current.offsetTop))
        }catch(error){
            console.log("Could not scroll to element. \n" + error)
        }
    }

    useEffect(()=>{
        handleLayout(props.screenSize)
    },[props.screenSize])

    // function closeDimmer(){
    //     if (props.dimmerShown ){
    //         props.setDimmerShown(false)
    //     }
    // }

    class IntroNormal extends Component{
        
        render(){
            return(
                <div className='intro-attached'>
                        My name is Brazill.<br></br>
                    I'm a self taught React developer with experience in software development, including Java and Android. 
                    I'm one of those devs who prefers using the command line when I can. 
                    <br></br>
                    I enjoy learning APIs to integrate to my projects.
                    The contact form on this page uses some code hosted on AWS Lambda & API Gateway to send me emails from visitors (<span className='intro-click-here' onClick={()=>{props.toggleContactDisplay(false,!props.isFloatingContactDisplayed)}}>Try it</span>).  
                    <br></br>
                    I use Firebase to host projects, including this one.
                    Although I'm a React Developer, I also enjoy creating more complex logic, like <span className='intro-click-here' onClick={()=> {scrollToProject('connectX')}}>ConnectX</span>.
                    <br></br><br></br>
                    **Note: This site is under constant construction. If you spot something, feel free to let me know!
                </div>
            )
        }
    }
    const IntroDetached = ()=> {
        
        return(
            <div>
                {props.detachedIntroShown
                ?<div>
                   {props.setDimmerShown(true)}
                    <div className='about-me-container'><div id='about-me-selected'>About Me</div></div>
                    <div className={introDetachedClass} onClick = {e => {e.stopPropagation()}}>
                        <div className='floating-contact-btn-close' onClick={hideIntro}></div>
                        <div className='intro-detached-text'>
                        My name is Brazill.<br></br>
                    I'm a self taught React developer with experience in software development, including Java and Android. 
                    I'm one of those devs who prefers using the command line when I can. 
                    <br></br>
                    I enjoy learning APIs to integrate to my projects.
                    The contact form on this page uses some code hosted on AWS Lambda & API Gateway to send me emails from visitors (<span className='intro-click-here' onClick={()=>{props.toggleContactDisplay(false,!props.isFloatingContactDisplayed)}}>Try it</span>).  
                    <br></br>
                    I use Firebase to host projects, including this one.
                    Although I'm a React Developer, I also enjoy creating more complex logic, like <span className='intro-click-here' onClick={()=> {scrollToProject('connectX')}}>ConnectX</span>.
                    <br></br><br></br>
                    **Note: This site is under constant construction. If you spot something, feel free to let me know!
                        </div>
                    </div>
                </div>
                :<div className='about-me-container'>
                    {props.setDimmerShown(false)}
                    <div id='about-me' onClick = {e => {e.stopPropagation(); showIntro()}}>About Me</div>
                </div>

                }
                
            </div>
        )
    }

    return(
        <div>
            {introDetached
            ?<IntroDetached></IntroDetached>
            : <div className='intro-wrapper'>
                <div className='bio-container bg-text'>
                    <div className='bio-pic my-auto'>
                        <img className='bio-img' src={profilePic} alt=''></img>
                    </div>
                    <div className='bio-text-holder'>
                        <div className='bio-text'>                        
                            <IntroNormal></IntroNormal>
                        </div>
                    </div>
                </div>

            </div>
            }
        </div>
        
    )
}
export default Intro