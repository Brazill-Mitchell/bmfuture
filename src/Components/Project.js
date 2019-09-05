import React, {useState,useRef} from 'react';
import './Project.css';
import Gecko from './Gecko.js'
import Atomist from './Atomist.js'


const Project =(props)=>{

    return(
        <div>
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