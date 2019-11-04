import React, {useState,useEffect} from 'react';
import { useTransition} from 'react-spring'

// Projects are added to a list and displayed dynamically
// Component notifies nav bar when it is hovered to close other menus
// Closes when other menus become active
const Projects = (props)=> {

    let [isListDisplayed, setIsListDisplayed] = useState(false)

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

    // Jump to selected project
    function scrollToProject(project){
        try{
            window.scrollTo(0,(props.refs[project].current.offsetTop))
        }catch(error){
            console.log("Could not scroll to element. \n" + error)
        }
    }

    // Close projects menu if another element is active
    function checkMenu(){
        if (props.menu !== 'projects' || props.navState === false){
            setIsListDisplayed(false)
            
        }else if(props.menu === 'projects'){
            
        }
    }
    // Listen for page changes to determine when to close menu
    useEffect(() => {
        checkMenu()
    })
    // To Do: Populate the menu with projects using Transitions
    let dropMenuTransitions = useTransition(projectList, project => project, {
        from: {opacity:0},
        enter: {opacity:1},
        leave: {opacity:0}
    })

    const ProjectList = (props)=> {
        return(
            <div>
                {isListDisplayed
                    // This is what shows when the item is toggled on
                    ? 
                    <div className='drop-menu'>
                        {dropMenuTransitions.map(({item: project, key, props}) => 
                            <div style={props} key={key}>
                                <div className=''>
                                    <div className='col menu-lv2' onClick={()=> scrollToProject(project[1])}>
                                        <div>
                                            {project[0]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}        
                    </div>
                    // This is what shows when the item is toggled off
                    :<div></div>
                }        
            </div>   
        )
    }

    return(
        
            <div className='container-fluid'>
                <div className='row'>
                {/* Projects */}
                    <div className='nav-item' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Projects
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