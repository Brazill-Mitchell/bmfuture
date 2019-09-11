import React, {useState,useRef,useEffect} from 'react';
// import {HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import './Nav.css';
import { useMediaQuery } from '@material-ui/core';

const Projects = (props)=> {

    let [isListDisplayed, setIsListDisplayed] = useState(false)

    // let projectList = ['Gecko Notes','Atomist','Connect X','Paint']
let projectList = [['Gecko Notes','gecko'],['Atomist','atomist'],['Connect X','connectX'],['Paint','paint']]
    let [menuItemStyle, setMenuItemStyle] = useState('col-12 mx-auto')

    const collapseSize = useMediaQuery('(min-width: 100px)')

    //Close this menu if another menu is selected
    //Close other menus when this menu is selected
    function handleClick(){
        if (!isListDisplayed){
            props.toggleMenu('projects')
        }else if(isListDisplayed){
            props.toggleMenu('none')
        }
        
    }
    function getTargetId(){
        console.log("Target")
        return(
            '#atomist'
        )
    }
    //Close projects menu if another element is active
    function checkMenu(){
        if (props.menu != 'projects' || props.navState == false){
            setIsListDisplayed(false)
            
        }else if(props.menu == 'projects'){
            setIsListDisplayed(true)
            
        }
    }
    useEffect(() => {
        checkMenu()
    })

    
//Make Nav Menu Responsive 
    function handleCollapse(){
        // setIsListDisplayed(false)
        // collapseSize? console.log(collapseSize.window) : console.log(collapseSize.valueOf)
    }

    // useEffect(() => {
    //     window.addEventListener('resize',handleCollapse)
    //     return() => window.removeEventListener('resize',handleCollapse)
    // },handleCollapse)

    let dropMenuTransitions = useTransition(projectList, project => project, {
        from: {opacity:0},
        enter: {opacity:1},
        leave: {opacity:0}
    })

    const ProjectList = (props)=> {
        return(
            <div className={menuItemStyle}>
                {/* 
                    Here is the section that should be animated
                    A toggle function controls the state for 'isListDisplayed 
                */}
                {dropMenuTransitions.map(({item: project, key, props}) => 
                    isListDisplayed
                    // This is what shows when the item is toggled on
                    ?    <animated.div className='nav-container' style={props} key={key}>
                            <div className='nav-container-special'>
                                <a href={getTargetId}>
                                    <div className='col menu-lv2'>
                                        {project[0]}
                                    </div>
                                </a>
                                
                            
                            </div>
                        </animated.div>
                        
                    // This is what shows when the item is toggled off
                    :<div></div>
                )}             
            </div>   
        )
    }


    return(
        
            <div className='container-fluid'>
                <div className='row'>
                {/* Projects */}
                    <div className='col' onClick={handleClick}>Projects
                        <div className='container-fluid child-project'>
                            <div className='row'>
                            {/* Project List */}
                                <ProjectList></ProjectList>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Projects