import React, {useState,useRef,useEffect} from 'react';
import { useTransition, animated } from 'react-spring'
import './Nav.css';

const Nav = ()=> {

    let [isListDisplayed, setIsListDisplayed] = useState(false)

    let projectList = ['Gecko Notes','Atomist','Connect X','Paint']
    

    let dropMenuTransitions = useTransition(projectList, project => project, {
        from: {opacity:0},
        enter: {opacity:1},
        leave: {opacity:0}
    })

    const Projects = (props)=> {
        if(isListDisplayed == false){
            return(
                <div className='col-12 text-left menu-lv2'>
                    <span className='menu-lv2'>{props.project}</span>
                </div>
        )
        }
        else{
            return ""
        }
        
    }
// Toggle the selected Menu's items
    function toggleProjectsDisplay(){
        if (isListDisplayed){
            console.log("Displayed, hiding projects")
            setIsListDisplayed(false)
        }else{
            console.log('Hidden, displaying projects')
            setIsListDisplayed(true)
        }
    }

    return(
        
        <nav>
            <div className='container-fluid nav-primary'>
                <div className='row'>
                {/* Projects */}
                    <div className='col-12 text-left menu-lv1 bg-success' onClick={toggleProjectsDisplay}>Projects</div>
                        <div className='container child-project'>
                            <div className='row'>
                            {/* Project List */}
                                <div>
                                    {dropMenuTransitions.map(({item: project, key, props}) => (
                                        <animated.div className='container' style={props}>
                                            <div className='row'>
                                                <Projects project={project}></Projects>
                                            </div>
                                        </animated.div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                </div>
            </div>

        </nav>

    )
}

export default Nav