import React, {useState,useMedia,useEffect,useRef} from 'react';
import './Main.css';
import Intro from './Intro.js'
import Project from './Project.js'
import Nav from './Nav.js'
import NavSide from './NavSide.js'
import phila from './images/phila.jpg'
import { userInfo } from 'os';



const Main = ()=> {

// Use Refs to navigate to each project section
    let refGecko = useRef(null)
    let refAtomist = useRef(null)
    let refConnectX =useRef(null)
    let refPaint = useRef(null)
    let refList = {
        'gecko':refGecko,
        'atomist':refAtomist,
        'connectX':refConnectX,
        'paint':refPaint
    }

    
    const mediaSm = '(min-width:400px)'
    const menuCollapseSize = '(max-width:600px)'
    const menuFullSize = '(min-width:800px)'
    const mediaLg = '(min-width:1200px)'
    const mqList = [mediaSm,menuFullSize,mediaLg]

    let [isNavCollapsed,setIsNavCollapsed] = useState(false)
// Manage which menu item is currently displayed
    let [activeSection,setActiveSection] = useState('none')
    
// Toggle the display mode of the Nav bar
    function toggleNav(){
         if (window.matchMedia(menuCollapseSize).matches){
            if (!isNavCollapsed){
                setIsNavCollapsed(true)
            } 
         }else if (isNavCollapsed){
             setIsNavCollapsed(false)
         }
        //  console.log('toggle')
    }
// Set the Nav bar as the active section
    function updateSection(element){
        setActiveSection(element)
        // console.log(activeSection)
    }   



    let expanded = 'col-lg-2 col-md-3 col-sm-3'

// Match current screen size to list of sizes
//Once for initial render, then on each resize
    function handleScreen(){
        toggleNav()
        console.log("Handling Screen")
    }
    useEffect(() => { //Load
        window.addEventListener('load',handleScreen)
        return() => window.removeEventListener('load',handleScreen)
    })
    useEffect(() => { //Resize
        window.addEventListener('resize',handleScreen)
        return() => window.removeEventListener('resize',handleScreen)
    })

//Give the body an onClick Handler
    const BodyWrapper= (props)=> {
        return(
            <div>
            
                <Body></Body>
            
            </div>
        )}

    const Body= (props)=> {
        function setBodyActive(){
            updateSection('body')
        }
        return(
        <div onClick={setBodyActive}>
            {/* <div className='row top-spacer'></div> */}
            <div className='row'>
                <div className='col-10 top-divider mx-auto'></div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Intro></Intro>
                </div>
            </div>
                <div className='row'>                   
                    
                    <div className='col'>
                        <Project refs={refList}/>
                    </div>
                </div>
        </div>
    )}
    
    function setNavActive(){
        updateSection('nav')
    }
    return (
        <div>
            {toggleNav}
            <div className='bg-container'><img className='bg-page' src={phila}/></div>
            <div className='container-fluid page-main'>
                {isNavCollapsed
                    ?<NavSide refs={refList} activeSection={activeSection} updateSection={updateSection} onClick={setNavActive} id='nav-z' />
                    :<Nav refs={refList} activeSection={activeSection} updateSection={updateSection} onClick={setNavActive} id='nav-z' />
                }
                <div className='intro-top-spacer'></div>
                <BodyWrapper id='body-wrapper'/>
            </div>
            
        </div>
    )
  
}

export default Main