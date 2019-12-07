import React, {useState,useEffect,useRef} from 'react'
import './FloatingContact.css'

const FloatingContact = ()=>{

    const refFloatMenu = useRef(null)
    const [menuDisplay,setMenuDisplay] = useState(true)
    
    // Menu Content
    const [floatingInputEmail,setFloatingInputEmail] = useState('')
    const [floatingInputText,setFloatingInputText] = useState('')

    function toggleMenu(){
        if (menuDisplay){
            setMenuDisplay(false)
            collapseMenu()
        }else{
            setMenuDisplay(true)
            expandMenu()
        }
    }

    function expandMenu(){
        refFloatMenu.current.style.width = 200 + 'px'
        console.log(refFloatMenu.current.style.width)
        refFloatMenu.current.style.height = 400 + 'px'
    }

    function collapseMenu(){
        refFloatMenu.current.style.width = 50 + 'px'
        console.log(refFloatMenu.current.style.width)
        refFloatMenu.current.style.height = 50 + 'px'
    }
    
    return(
        <div ref={refFloatMenu} className='floating-contact-container' onClick={toggleMenu}>
            <div className='floating-contact-btn-close'></div>
            <div className='floating-greeting'>Get in Touch</div>
            
            <input className='floating-input-email' placeholder='Email' value={floatingInputEmail}></input>
            <input className='floating-input-message' placeholder='Type a message here' value={floatingInputText}></input>
        </div>
    )
}

export default FloatingContact