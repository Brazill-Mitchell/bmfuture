import React, {useState,useRef,useEffect} from 'react';
// import {HashLink as Link} from 'react-router-hash-link'
import { useTransition, animated } from 'react-spring'
import './NavSide.css';

const Projects = (props)=> {

    let [isListDisplayed, setIsListDisplayed] = useState(false)

    // let projectList = ['Gecko Notes','Atomist','Connect X','Paint']
let projectList = [['Gecko Notes','gecko'],['Atomist','atomist'],['Connect X','connectX'],['Paint','paint']]

    //Close this menu if another menu is selected
    //Close other menus when this menu is selected
    // function handleClick(){
    //     if (!isListDisplayed){
    //         props.toggleMenu('projects')
    //     }else if(isListDisplayed){
    //         props.toggleMenu('none')
    //     }
    // }
    function handleMouseOver(){
        props.setNavActive()
        props.toggleMenu('projects')
    }
    function handleMouseLeave(){
        props.toggleMenu('none')
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

    let dropMenuTransitions = useTransition(projectList, project => project, {
        from: {opacity:0},
        enter: {opacity:1},
        leave: {opacity:0}
    })

    const ProjectList = (props)=> {
        return(
            <div className='drop-menu-side' onMouseLeave={handleMouseLeave}>
                {/* 
                    Here is the section that should be animated
                    A toggle function controls the state for 'isListDisplayed 
                */}
                {dropMenuTransitions.map(({item: project, key, props}) => 
                    isListDisplayed
                    // This is what shows when the item is toggled on
                    ?    <animated.div className='' style={props} key={key}>
                            <div className=''>
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
        
                <div className='nav-item-container'>
                {/* Projects */}
                    <div className='menu-lv1 nav-item' onMouseOver={handleMouseOver}>Projects</div>
                            {/* Project List */}
                    <ProjectList></ProjectList>
                            
                        
                    
                </div>
    )
}

export default Projects