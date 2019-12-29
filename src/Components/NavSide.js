import React, {useState,useEffect} from 'react';
import ContactSide from './ContactSide.js'
import ProjectsSide from './ProjectsSide.js'
import bmLogo from './images/bmfuture logo.jpg'

const NavSide = (props)=> {
/*Keep track of which menu is currently seleced
Close Menus that aren't selected
*/

// Checks whether or not the Nav Bar is the active component
    let [navState,setNavState] = useState(false)
// Set which menu is currently open
    let [menu,setMenu] = useState('none')
    function toggleMenu(menu){
        setMenu(menu)
    }  
// Handle collapse of the Nav bar
    let [isNavCollapsed,setIsNavCollapsed] = useState(true)
    function toggleNav(){
        setIsNavCollapsed(!isNavCollapsed)
    }
/* Checks to see if the Nav Bar is the active section.
If the Body is active, the Nav bar will close
*/
    function checkActiveSection(){
        if (props.activeSection !== 'nav'){
            setNavState(false)
        }
    }
    useEffect(() => {
        checkActiveSection()
    })

// Sets Nav bar as the active component
    function setNavActive(){
        props.updateSection('nav')
        setNavState(true)
    }
    function handleClick(){
        setNavState(true)
        props.onClick()
    }

    
    
    return(
        <div>
        {isNavCollapsed
            ?<div id='logo-container-side' onClick={toggleNav}><img id='logo-side' src={bmLogo} alt=''/></div>
            :<div className='nav-wrap-side' onClick={handleClick}>
            {/* Filler Item */}
                <div className='nav-item'>
                    <div className='img-small mx-auto' toggleMenu={toggleMenu} onClick={toggleNav}>
                        <img className='img' src={bmLogo} alt=''></img>
                    </div>
                </div>
            {/* Projects */}
                <div className='nav-item'>
                    <ProjectsSide refs={props.refs} navState={navState} setNavActive={setNavActive} menu={menu} toggleMenu={toggleMenu}></ProjectsSide>                            
                </div>
            {/* Contact */}
                <div className='nav-item'>
                    <ContactSide navState={navState} setNavActive={setNavActive} menu={menu} toggleMenu={toggleMenu}></ContactSide>
                </div>
            {/* Skills */}
                {/* <div className='nav-item'>
                        <div toggleMenu={toggleMenu}>Skills</div>
                </div> */}
            </div>
}
        </div>
    )
}

export default NavSide