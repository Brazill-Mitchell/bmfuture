import React, { useState,useRef} from 'react'
import OpenAnimator from './OpenAnimator.js'
import './FloatingContact.css'
import gmail from './images/gmail.png'

const FloatingContact = ()=>{

    const refFloatMenu = useRef(null)
    const [menuDisplay,setMenuDisplay] = useState(false)
    const [menuFields,setMenuFields] = useState(false)
    const [floatingContactClass,setFloatingCOntactClass] = useState('floating-contact-container-collapsed')
    // const [menuContentClass,setMenuContentClass] = useState()
    
    // Menu Content
    const [emailText,setEmailText] = useState('')
    const [messageText,setMessageText] = useState('')
    const [mailDisplay,setMailDisplay] = useState(true)

    // Manage Form Input
    function updateEmailText(e){
        setEmailText(e.target.value)
    }
 
    function updateMessageText(e){
        setMessageText(e.target.value)
    }
    function sendMessage(){
        setEmailText('')
        setMessageText('')
    }

    function openMenu(){
        if (!menuDisplay){
            setMailDisplay(false)
            setMenuDisplay(true)
            setFloatingCOntactClass('floating-contact-container')
            expandMenu()
            setTimeout(() => {
                setMenuFields(true)
            }, 200);
        }
    }
    function closeMenu(){
        if (menuDisplay){
            setMenuDisplay(false)
            setFloatingCOntactClass('floating-contact-container-collapsed')
            collapseMenu()
            setMenuFields(false)
            setTimeout(() => {
                setMailDisplay(true)
            }, 200);
        }
    }

    function expandMenu(){
        refFloatMenu.current.style.width = 400 + 'px'
        refFloatMenu.current.style.height = 400 + 'px'
    }

    function collapseMenu(){
        refFloatMenu.current.style.width = 50 + 'px'
        refFloatMenu.current.style.height = 50 + 'px'
    }
    
    const menuContent = 
        [<div className='floating-contact-btn-close' onClick={closeMenu}></div>,
        <div className='floating-greeting'>Get in Touch</div>,
        <input className='floating-input-email' placeholder='Email' value={emailText} onChange={updateEmailText}></input>,
        <input className='floating-input-message' placeholder='Type a message here' value={messageText} onChange={updateMessageText}></input>,
        <button className='btn-send' onClick={sendMessage}>Send</button>
        ]

    return(
        // <OpenAnimator items={menuContent} ref={refFloatMenu} className='floating-contact-container' onClick={toggleMenu}>
        // </OpenAnimator>
        <div ref={refFloatMenu} className={floatingContactClass} onClick={openMenu} onBlur={()=>console.log('Blur')}>
            {menuFields
                ?menuContent
                :<div></div>}
            {mailDisplay
                ?<img className='img' src={gmail} alt=''></img>
                :<div></div>}
        </div>
    )
}

export default FloatingContact