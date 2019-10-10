import React, {useState,useEffect} from 'react';
import Contact from './Contact.js'
import Projects from './Projects.js'
import Skills from './Skills.js'
import Logo from './Logo.js'


const Nav = (props)=> {
// Keep track of which menu is currently seleced
// Close Menus that aren't selected
// Pass functions from main to communicate which menu is active
    let [navState,setNavState] = useState(false)

    let [menu,setMenu] = useState('none')
    function toggleMenu(menu){
        setMenu(menu)
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

    useEffect(() => {
        checkActiveSection()
    })
    
    return(
        
        
            <div className='container-fluid nav-wrap'>
                <div className='row h-100'>
                    <Logo className=''/>
                    <div className='nav-spacer'></div>
                {/* Filler Item */}
                    <div className='menu-lv1'>
                        <div toggleMenu={toggleMenu}>Home</div>
                    </div>
                {/* Projects */}
                    <div className='menu-lv1'>
                        <Projects refs={props.refs} navState={navState} setNavActive={setNavActive} menu={menu} toggleMenu={toggleMenu}></Projects>                            
                    </div>
                {/* Contact */}
                    <div className='menu-lv1'>
                        <Contact navState={navState} setNavActive={setNavActive} menu={menu} toggleMenu={toggleMenu}></Contact>
                    </div>
                {/* Skills */}
                    <div className='menu-lv1'>
                        <Skills navState={navState} menu={menu} toggleMenu={toggleMenu}></Skills>
                    </div>
                {/* Filler Item */}
                    <div className='menu-lv1'>
                            <div toggleMenu={toggleMenu}>About</div>
                    </div>
                    <div className='nav-spacer'></div>
                </div>
            </div>

        

    )
}

export default Nav