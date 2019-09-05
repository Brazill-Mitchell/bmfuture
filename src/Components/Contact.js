import React, {useState,useRef,useEffect} from 'react';
import gitImg from '../images/GitHub-Mark.png'
import linkedInImg from '../images/linkedin-icon.png'
import gmailImg from '../images/gmail.png'
import './Contact.css'
import './Nav.css'

const Contact= ()=> {

let [displayOptions,setDisplayOptions] = useState(true)

    function toggleMenu(){
        setDisplayOptions(!displayOptions)
    }

    return(

        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col contact-menu' onClick={toggleMenu}>Contact
                        {displayOptions
                            ?<div className='container-fluid menu-lv1'>
                                <div className='nav-container'>
                                        <div className='nav-container-special menu-lv2'>
                                            <div className=''>LinkedIn</div>
                                            <div className='contact-item'>
                                                <img className='contact-img' src={linkedInImg}></img>
                                            </div>
                                        </div>
                                        <div className='nav-container-special menu-lv2'>
                                            <div className=''>Email</div>
                                            <div className='contact-item'>
                                                <img className='contact-img' src={gmailImg}></img>
                                            </div>
                                        </div>
                                        <div className='nav-container-special menu-lv2'>
                                            <div className=''>Github</div>
                                            <div className='contact-item'>
                                                <img className='contact-img' src={gitImg}></img>
                                            </div>
                                        </div>
                                </div>

                            </div>
                                
                        :<div></div>
                        }
                        
                           


                    </div>
                </div>
            </div>





        </div>
        

            
        
    )

}

export default Contact