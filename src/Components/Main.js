import React, {useState,useMedia, useEffect} from 'react';
import { useMediaQuery } from '@material-ui/core';
import './Main.css';
import Project from './Project.js'
import Nav from './Nav.js'


const Main = ()=> {

    // const collapseSize = useMediaQuery('(min-width: 600px)')
    const mediaSm = '(min-width:400px)'
    const mediaMd = '(min-width:800px)'
    const mediaLg = '(min-width:1200px)'
    const mqList = [mediaSm,mediaMd,mediaLg]



    let expanded = 'col-lg-2 col-md-3 col-sm-3'
    let [navClass,setNavClass] = useState(expanded)


    // Match current screen size to list of sizes
    function handleScreen(){
        for (let q = 0; q < mqList.length; q++){
            if (window.matchMedia(mqList[q]).matches){
                console.log("Screen Size: " + mqList[q])
            }
        }
        // const match = window.matchMedia(mqList[1]).matches
        // collapseSize? setNavClass('') : setNavClass('menu-collapsed')
    }

    useEffect(() => {
        
        window.addEventListener('resize',handleScreen)
        return() => window.removeEventListener('resize',handleScreen)
    },handleScreen)

    return(
        
        <div>
            {/* <div>Media{mediaMd}</div> */}
            <div className='container-fluid'>
                <Nav></Nav>
                <div className='row top-spacer'></div>
                <div className='row'>
                    <div className='col-10 top-divider mx-auto'></div>
                </div>
                {/* <div className='row' */}
                <div className='row'>                   
                    
                    <div className='col'>
                        <Project/>
                     </div>
                </div>
            </div>
            
        </div>

    )
}

export default Main