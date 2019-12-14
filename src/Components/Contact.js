import React, {useState,useEffect} from 'react';
import gitImg from '../images/GitHub-Mark.png'
import linkedInImg from '../images/linkedin-icon.png'
import gmailImg from '../images/gmail.png'
import './Contact.css'
import './Nav.css'

const Contact= (props)=> {

let [isListDisplayed,setIsListDisplayed] = useState(false)
// Let the Nav Bar know this menu has been selected

    //Check for changes to Nav Bar's currently set menu
    useEffect(() => {
        checkMenu()
    })

    function handleMouseOver(){
        props.setNavActive()
        props.toggleMenu('contact')
    }
    function handleMouseLeave(){
        props.toggleMenu('none')
    }
    //Close contact menu if another element is active
    function checkMenu(){
        if (props.menu !== 'contact' || props.navState === false){
            setIsListDisplayed(false)
            
        }else if(props.menu === 'contact'){
            setIsListDisplayed(true)
        }
    }

    return(

        <div>
            {/* <div>{props.menu}</div> */}
            <div className='container'>
                <div className='row'>
                    <div className='col nav-item' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Contact
                        {isListDisplayed
                            ?<div className='container-fluid'>
                                    <div className='row'>
                                        <div className='mx-auto drop-menu'>
                                            <a href='https://www.linkedin.com/in/brazill-mitchell-42601188/' className='nav-container menu-lv2 nav-container-special' target='_blank' rel="noopener noreferrer">
                                                <div className='contact-label'>LinkedIn</div>
                                                <div className='contact-item'>
                                                    <img className='contact-img' src={linkedInImg} alt=''></img>
                                                </div>
                                            </a>
                                            <a href='https://github.com/brazill-mitchell' target='_blank' rel="noopener noreferrer"className='nav-container menu-lv2 nav-container-special'>
                                                <div className='contact-label'>Github</div>
                                                <div className='contact-item'>
                                                    <img className='contact-img' src={gitImg} alt=''></img>
                                                </div>
                                            </a>
                                            {/* <div className='nav-container menu-lv2 nav-container-special'>
                                                <div className='contact-label'>Email</div>
                                                <div className='contact-item'>
                                                    <img className='contact-img' src={gmailImg} alt=''></img>
                                                </div>
                                            </div> */}
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