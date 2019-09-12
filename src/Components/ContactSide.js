import React, {useState,useRef,useEffect} from 'react';
import gitImg from '../images/GitHub-Mark.png'
import linkedInImg from '../images/linkedin-icon.png'
import gmailImg from '../images/gmail.png'
import './NavSide.css'

const Contact= (props)=> {

let [isListDisplayed,setIsListDisplayed] = useState(true)
// Let the Nav Bar know this menu has been selected

    //Check for changes to Nav Bar's currently set menu
    useEffect(() => {
        checkMenu()
    })

//Keep track of which menu is currently seleced
//Close Menus that aren't selected
    function handleClick(){
        if (!isListDisplayed){
            props.toggleMenu('contact')
        }else if(isListDisplayed){
            props.toggleMenu('none')
        }
        
    }
    //Close contact menu if another element is active
    function checkMenu(){
        if (props.menu != 'contact' || props.navState == false){
            setIsListDisplayed(false)
            
        }else if(props.menu == 'contact'){
            setIsListDisplayed(true)
        }
    }

    return(

        <div>
            <div className='nav-item-container'>                    
                <div className='menu-lv1' onClick={handleClick}>Contact</div>
                    <div>
                        {isListDisplayed
                            ?<div className='drop-menu'>
                                <div className='nav-container'>
                                        <div className='nav-container-special menu-lv2'>
                                            <div className=''>LinkedIn</div>
                                            <div className=''>
                                                <img className='contact-img' src={linkedInImg}></img>
                                            </div>
                                        </div>
                                        <div className='nav-container-special menu-lv2'>
                                            <div className=''>Email</div>
                                            <div className=''>
                                                <img className='contact-img' src={gmailImg}></img>
                                            </div>
                                        </div>
                                        <div className='nav-container-special menu-lv2'>
                                            <div className=''>Github</div>
                                            <div className=''>
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
        

            
        
    )

}

export default Contact