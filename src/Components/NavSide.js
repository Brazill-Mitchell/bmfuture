import React, {useState,useRef,useEffect} from 'react';
import { useTransition, animated } from 'react-spring'
import ContactSide from './ContactSide.js'
import ProjectsSide from './ProjectsSide.js'
import Logo from './Logo.js'
import fillerLogo from './images/fillerLogo.png'

const NavSide = (props)=> {
//Keep track of which menu is currently seleced
//Close Menus that aren't selected
    let [navState,setNavState] = useState(false)

    let [menu,setMenu] = useState('none')
    function toggleMenu(menu){
        setMenu(menu)
    }  
// Handle Collapse
    let [isNavCollapsed,setIsNavCollapsed] = useState(false)
    function toggleNav(){
        setIsNavCollapsed(!isNavCollapsed)
    }
    
    function checkActiveSection(){
        if (props.activeSection != 'nav'){
            setNavState(false)
        }
    }
    function setNavActive(){
        props.updateSection('nav')
        setNavState(true)
    }
    function handleClick(){
        setNavState(true)
        props.onClick()
    }

    useEffect(() => {
        checkActiveSection()
        // window.addEventListener('resize',handleCollapse)
        // return() => window.removeEventListener('resize',handleCollapse)
        // return()=> console.log("Use Effect Return")
    })
    
    return(
        <div>
        {isNavCollapsed
            ?<div className='nav-wrap-side' onClick={handleClick}>
            {/* Filler Item */}
                <div className='nav-item'>
                    <div toggleMenu={toggleMenu} onClick={toggleNav}>Menu Icon</div>
                </div>
            {/* Projects */}
                <div className='nav-item'>
                    <ProjectsSide refs={props.refs} navState={navState} setNavActive={setNavActive} menu={menu} toggleMenu={toggleMenu}></ProjectsSide>                            
                </div>
            {/* Contact */}
                <div className='nav-item'>
                    <ContactSide navState={navState} setNavActive={setNavActive} menu={menu} toggleMenu={toggleMenu}></ContactSide>
                </div>
            {/* Filler Item */}
                <div className='nav-item'>
                        <div toggleMenu={toggleMenu}>About</div>
                </div>
            </div>
            
            :<div id='logo-container-side' onClick={toggleNav}><img id='logo' src={fillerLogo}/></div>
            
            
        }
        </div>
            

        

    )
}

export default NavSide