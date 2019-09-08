import React, {useEffect} from 'react';
import './Project.css';
import Gecko from './Gecko.js'
import Atomist from './Atomist.js'


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
            <div>
                <Gecko></Gecko>
            </div>
            <div className='spacer mt-3 mx-auto'></div>
            <div className='mt-5'>
                <Atomist></Atomist>
            </div>
            <div className='spacer mt-3 mx-auto'></div>

        </div>
    )
}

export default Project