import React, {useState,useEffect} from 'react';
import ContactSide from './ContactSide.js'
import ProjectsSide from './ProjectsSide.js'
import bmLogo from './images/bmfuture logo.jpg'

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
    })
    
    return(
        <div>
        {isNavCollapsed
            ?<div className='nav-wrap-side' onClick={handleClick}>
            {/* Filler Item */}
                <div className='nav-item'>
                    <div toggleMenu={toggleMenu} onClick={toggleNav} style={{color: 'rgba(203,234,255,.6)'}}>Hide</div>
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
                <div className='nav-item' style={{color:'rgba(0,0,0,.2)'}}>
                        <div toggleMenu={toggleMenu}>About</div>
                </div>
            </div>
            
            :<div id='logo-container-side' onClick={toggleNav}><img id='logo-side' src={bmLogo}/></div>
        }
        </div>
    )
}

export default NavSide