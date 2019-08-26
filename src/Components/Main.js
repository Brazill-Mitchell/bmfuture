import React, {useState,useRef} from 'react';
import './Main.css';
import Project from './Project.js'
import Nav from './Nav.js'

const Main = ()=> {
    

    return(
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-1'>
                        <Nav/>
                    </div>
                    <div className='col-11'>
                        <Project/>
                     </div>
                </div>
            </div>
            
        </div>

    )
}

export default Main