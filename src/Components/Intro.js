import React, { Component, useState,useEffect } from 'react'
import profilePic from './images/profile-image.png'
import './Intro.css'
const manager = require('./manager.js')

const Intro=(props)=>{

    const [introDetached,setIntroDetached] = useState(true)
    const [introPreview,setIntroPreview] = useState(true)

    function handleLayout(screenSize){
        if(screenSize === manager.responsive.xl){
            if ( introDetached ){
                setIntroDetached(false)
            }else if(screenSize === manager.responsive.computer || screenSize === manager.responsive.tablet || screenSize === manager.responsive.mobile){
                setIntroDetached(true)
            }
        }
    }

    function hideIntro(){
        setIntroPreview(true)
    }
    function showIntro(){
        setIntroPreview(false)
    }

    useEffect(()=>{
        handleLayout(props.screenSize)
    },[props.screenSize])

    class IntroNormal extends Component{
        
        render(){
            return(
                <div className='intro-attached'>My name is Brazill.<br></br>
                I'm a self taught React developer with experience in software development, including Java and Android. 
                I earned a Bachelor's in Communications from Penn State University. 
                Growing up, a career path as a developer had never been presented as an option, but I've always had the analytical mindset of one.
                When I realized my passion for science and modern technology outweighed my great interest in art and cinema, I decided it was time to make the transition into technology. 
                With little guidance, I researched intently and began teaching myself to code. 
                Today, my goal is to become someone who can reach other people who aren't aware of all their options, and help guide them in the right direction to achieve their goals, whether they be tech related or other.</div>
            )
        }
    }
    const IntroDetached = ()=> {
        
        return(
            <div>
                {introPreview
                ?<div id='about-me' onClick={showIntro}>About Me</div>
                :<div className='intro-detached'>
                    <div className='floating-contact-btn-close' onClick={hideIntro}></div>
                    <div className='click-catcher'></div>
                    <div className='intro-detached-text'>
                        My name is Brazill.<br></br>
                        I'm a self taught React developer with experience in software development, including Java and Android. 
                        I earned a Bachelor's in Communications from Penn State University. 
                        Growing up, a career path as a developer had never been presented as an option, but I've always had the analytical mindset of one.
                        When I realized my passion for science and modern technology outweighed my great interest in art and cinema, I decided it was time to make the transition into technology. 
                        With little guidance, I researched intently and began teaching myself to code. 
                        Today, my goal is to become someone who can reach other people who aren't aware of all their options, and help guide them in the right direction to achieve their goals, whether they be tech related or other.
                    </div>
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