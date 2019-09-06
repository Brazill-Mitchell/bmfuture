import React, {useState,useRef,useEffect} from 'react';
import { useTransition, animated } from 'react-spring'
import Contact from './Contact.js'
import Projects from './Projects.js'
import './Nav.css';
import { useMediaQuery } from '@material-ui/core';

const Nav = ()=> {
//Keep track of which menu is currently seleced
//Close Menus that aren't selected
    let [menu,setMenu] = useState('none')
    function toggleMenu(menu){
        setMenu(menu)
        console.log(menu)
    }
    function closeMenus(menu){ 
        // toggleMenu(menu)
        // console.log(menu)
    }

    let [isListDisplayed, setIsListDisplayed] = useState(true)

    let projectList = ['Gecko Notes','Atomist','Connect X','Paint']
    let [menuItemStyle, setMenuItemStyle] = useState('col-lg-8 col-md-10 col-sm-12 mx-auto')

    const collapseSize = useMediaQuery('(min-width: 100px)')
    
//Make Nav Menu Responsive 
    function handleCollapse(){
        // setIsListDisplayed(false)
        // collapseSize? console.log(collapseSize.window) : console.log(collapseSize.valueOf)
    }

    useEffect(() => {
        window.addEventListener('resize',handleCollapse)
        return() => window.removeEventListener('resize',handleCollapse)
    },handleCollapse)
    

    let dropMenuTransitions = useTransition(projectList, project => project, {
        from: {opacity:0},
        enter: {opacity:1},
        leave: {opacity:0}
    })

// Toggle the selected Menu's items
    function toggleProjectsDisplay(){
        if (isListDisplayed){
            // console.log("Displayed, hiding projects")
            setIsListDisplayed(false)
        }else{
            // console.log('Hidden, displaying projects')
            setIsListDisplayed(true)
        }
    }

    return(
        
        <nav className='nav-wrapper'>
            <div className='container-fluid nav-primary position'>
                <div className='row'>
                {/* Filler Item */}
                    <div className='col-3 menu-lv1'>
                        <div >Home</div>
                    </div>
                {/* Projects */}
                    <div className='col-3 menu-lv1' onClick={toggleProjectsDisplay}>
                        <Projects menu={menu}></Projects>                            
                    </div>
                {/* Contact */}
                    <div className='col-3 menu-lv1'>
                        <Contact menu={menu} toggleMenu={toggleMenu} closeMenus={closeMenus}></Contact>
                    </div>
                {/* Filler Item */}
                    <div className='col-3 menu-lv1'>
                            <div>About</div>
                    </div>
                </div>
            </div>

        </nav>

    )
}

export default Nav