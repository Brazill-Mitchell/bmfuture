import React, {useState,useRef,useEffect} from 'react';
// import {HashLink as Link} from 'react-router-hash-link'
import { useTransition, animated } from 'react-spring'

const Projects = (props)=> {

    let [isListDisplayed, setIsListDisplayed] = useState(false)

    // let projectList = ['Gecko Notes','Atomist','Connect X','Paint']
let projectList = [['Gecko Notes','gecko'],['Atomist','atomist'],['Connect X','connectX'],['Paint','paint']]

    function handleMouseOver(){
        props.setNavActive()
        props.toggleMenu('projects')
        setIsListDisplayed(true)
        console.log('mouseover')
    }
    function handleMouseLeave(){
        props.toggleMenu('none')
        console.log('mouse leave')
    }

//Jump to selected project
    function scrollToProject(project){
        try{
            window.scrollTo(0,(props.refs[project].current.offsetTop)+430)
        }catch(error){
            console.log("Could not scroll to element. \n" + error)
        }
    }

    //Close projects menu if another element is active
    function checkMenu(){
        if (props.menu != 'projects' || props.navState == false){
            setIsListDisplayed(false)
            
        }else if(props.menu == 'projects'){
            // setIsListDisplayed(true)
            
        }
    }
    function test(event){
        // console.log(event.target.dataset)
    }
    useEffect(() => {
        checkMenu()
        // window.addEventListener('onmouseleave',test(window.event))
        // return(window.removeEventListener('onmouseleave',test(window.event)))
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
            <div className='col-12 mx-auto drop-menu'>
                {/* 
                    Here is the section that should be animated
                    A toggle function controls the state for 'isListDisplayed 
                */}
                {dropMenuTransitions.map(({item: project, key, props}) => 
                    isListDisplayed
                    // This is what shows when the item is toggled on
                    ?    <animated.div className='nav-container' style={props} key={key}>
                            <div className=''>
                                    <div className='col menu-lv2' onClick={()=> scrollToProject(project[1])}>
                                    {/* Continue Here */}
                                        <div>
                                            {project[0]}
                                        </div>
                                        
                                    </div>
                                
                            
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
                    <div className='col nav-item' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Projects
                        <div className='container-fluid' >
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