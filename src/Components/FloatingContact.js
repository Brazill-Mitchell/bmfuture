import React, { useState,useEffect,useRef} from 'react'
// import OpenAnimator from './OpenAnimator.js'
import './FloatingContact.css'
import gmail from './images/gmail.png'
const messageSender = require('./messageSender.js').http

const FloatingContact=(props)=>{

    const refFloatMenu = useRef(null)
    // Menu and menu fields are rendered with separate timing for better animation visual
    const [menuDisplay,setMenuDisplay] = useState(false)
    const [menuFields,setMenuFields] = useState(false)
    const [floatingContactClass,setFloatingContactClass] = useState('floating-contact-container-collapsed')
    // const [menuContentClass,setMenuContentClass] = useState()
    
    // Menu Content
    const [emailText,setEmailText] = useState('')
    const [subjectText,setSubjectText] = useState('')
    const [messageText,setMessageText] = useState('')
    const [mailIconDisplay,setIconMailDisplay] = useState(true)
    const [isMessageSentShown,setMessageSentDialogue] = useState(false)

    // Manage Form Input
    function updateEmailText(e){
        setEmailText(e.target.value)
    }
 
    function updateMessageText(e){
        setMessageText(e.target.value)
    }
    function sendMessage(){
        if(emailText.length !== 0 && messageText.length !== 0){//TODO: check for email format
            messageSender(emailText,'Message from BMFuture',messageText)
            console.log('Message sent. Email: ' + emailText + '\r\n Message: ' + messageText)
            setEmailText('')
            setMessageText('')
            showMessageSentDialogue()
        }else{//TODO: prompt user to enter email, subject, or message
            if(emailText.length === 0){
                console.log('Please enter your email')
            }
            if(messageText.length === 0){
                console.log('Please enter a subject')
            }
            if(subjectText.length === 0){
                console.log('Please type a message')
            }
        }
        
    }

    function showMessageSentDialogue(){
        setMessageSentDialogue(true)
        setTimeout(() => {
            setMessageSentDialogue(false)
            closeMenu()
        }, 3000);
    }

    const MessageSent = () => {

        return(
            <div className='message-sent'>Thanks, I'll get back to you soon!</div>
        )

    }

    function openMenu(){
        if (!menuDisplay){
            setIconMailDisplay(false)
            setMenuDisplay(true)
            setFloatingContactClass('floating-contact-container')
            expandMenu()
            setTimeout(() => {
                setMenuFields(true)
            }, 200);
        }
    }
    function closeMenu(){
        if (menuDisplay){
            setMenuDisplay(false)
            setFloatingContactClass('floating-contact-container-collapsed')
            collapseMenu()
            setMenuFields(false)
            setTimeout(() => {
                setIconMailDisplay(true)
            }, 200);
        }
    }

    function expandMenu(){
        refFloatMenu.current.style.width = 
        props.screenSize === 'mobile' ? 80 + '%' : 400 + 'px'
        refFloatMenu.current.style.height = 400 + 'px'
    }
    function collapseMenu(){
        refFloatMenu.current.style.width = 50 + 'px'
        refFloatMenu.current.style.height = 50 + 'px'
    }
    function toggleContactFromIntro(){
            if(props.isFloatingContactDisplayed){
                openMenu()
            }else{
                closeMenu()
            }
        // }
    }
    useEffect(()=>{
        toggleContactFromIntro()
    },[props.isFloatingContactDisplayed])

    // Chance Display mode for desired Screen Sizes
    // useEffect(()=>{
    //     // test(props.screenSize)
    // },[props.screenSize])
    
    
    const menuContent = 
        [<div className='floating-contact-btn-close' onClick={()=>{props.toggleContactDisplay(true,false);console.log('Close Clicked')}}></div>,
        <div className='floating-greeting'>Get in Touch</div>,
        <input className='floating-input-email' placeholder='My Email' value={emailText} onChange={updateEmailText}></input>,
        <textarea className='floating-input-message' placeholder='Type a message here' value={messageText} onChange={updateMessageText}></textarea>,
        <button className='btn-send' onClick={sendMessage}>Send</button>,
        <div>{isMessageSentShown
            ?<MessageSent></MessageSent>
            :<div></div>
        }</div>
        ]

    return(
        // <OpenAnimator items={menuContent} ref={refFloatMenu} className='floating-contact-container' onClick={toggleMenu}>
        // </OpenAnimator>
        <div 
            ref={refFloatMenu} 
            className={floatingContactClass} 
            onClick={
                menuFields 
                    ? ()=>{}
                    :()=>{props.toggleContactDisplay(true,true)}
                
            } 
            onBlur={()=>console.log('Blur')}>
            {menuFields
                ?menuContent
                :<div></div>}
            {mailIconDisplay
                ?<img className='img' src={gmail} alt=''></img>
                :<div></div>}
        </div>
    )
}

export default FloatingContact