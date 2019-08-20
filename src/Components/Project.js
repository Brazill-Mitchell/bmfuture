import React, {useState,useRef} from 'react';
import './Project.css';
import ScreenShot from './screenshot.js'
import GeckoImages from './GeckoImages.js'

const Project =()=>{
    return(
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='container'>
                            <div className='row'>

                                {/* GIF */}
                                <div className='col-sm-12 sol-md-8 col-lg-8'>
                                <ScreenShot ></ScreenShot>
                                </div>

                                {/* Description */}
                                <div className='col-sm-12 sol-md-4 col-lg-4 desc'>
                                einiobno iernbodfbn osinofbnoidfnod bnoinsd fbsdfbdfb aererbsebrrb erbe srb serbsbererer esrbserbsreb serbreabaererbojopj ojopj ojo jpojop j oj ojpojpojpo jopjopjmopmj ojmpojmo mpompo einiobno iernbodfbn osinofbnoidfnod bnoinsd fbsdfbdfb aererbsebrrb erbe srb serbsbererer esrbserbsreb serbreabaererbojopj ojopj ojo jpojop j oj ojpojpojpo jopjopjmopmj ojmpojmo mpompoeiniobno iernbodfbn osinofbnoidfnod bnoinsd fbsdfbdfb aererbsebrrb erbe srb serbsbererer esrbserbsreb serbreabaererbojopj ojopj ojo jpojop j oj ojpojpojpo jopjopjmopmj ojmpojmo mpompoeiniobno iernbodfbn osinofbnoidfnod bnoinsd fbsdfbdfb aererbsebrrb erbe srb serbsbererer esrbserbsreb serbreabaererbojopj ojopj ojo jpojop j oj ojpojpojpo jopjopjmopmj ojmpojmo mpompo 
                                </div>

                            </div>
                        </div>

                        {/* Thumbnails */}
                        <GeckoImages></GeckoImages>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project