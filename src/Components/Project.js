import React, {useEffect} from 'react';
import Gecko from './Gecko.js'
import Atomist from './Atomist.js'
import ConnectX from './ConnectX.js'
import Paint from './Paint.js'



const Project =(props)=>{

    //Set the body as the active element and close the menus each time it is clicked
    function setActive(){
        props.setActiveElement('body')
        console.log("Project: Active Element: " + props.isNavActive)
    }

    useEffect(() => {
        // window.addEventListener('click',setActive)
    })

    return(
        <div className=''>
            <div className='projects-label'>Projects</div>
            <div className='projects-label-subtitle'>This is a description of the projects section.</div>
            <div>
                <Gecko  refs={props.refs}></Gecko>
            </div>
            <div className='spacer mt-3 mx-auto'></div>
            <div className='mt-5'>
                <Atomist refs={props.refs}></Atomist>
            </div>
            <div className='mt-5'>
                <ConnectX refs={props.refs}></ConnectX>
            </div>
            <div className='mt-5'>
                <Paint refs={props.refs}></Paint>
            </div>
            <div className='spacer mt-3 mx-auto'></div>

        </div>
    )
}

export default Project