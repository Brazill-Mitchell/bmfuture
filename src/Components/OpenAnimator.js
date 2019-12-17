import React, { Component, PureComponent } from 'react'
import styleBuilder from './styleBuilder.js'
import {propSelector} from './propSelector.js'


/* Take a list of items to create an animation sequence
using the chosen beginning and end style values, and the desired animation speed 
*/

class OpenAnimator extends Component{

    
    constructor(props){
        super(props)
        try{
            
            const userItems = props.items
            const convertedItems = []
            let animationStyle = {}
        
            if(props.animationStyle){
                animationStyle = styleBuilder.styleBuilder(props.animationStyle)
            }else{
                animationStyle = styleBuilder.styleBuilder(null)
            }

            function getClass(){
                if(props.className !== null){
                    return props.className
                }else{
                    return animationStyle.containerStyle.className
                }
            }
            this.containerClass = getClass()
            
            const beginAnimation = (context) => {
                context.setState({
                    style: animationStyle.itemStyle.finish
                })
                console.log('Beginning Animation')
            }
            const removeElement = (context) => {
                // context.setState({
                //     style: animationStyle.itemStyle.leave
                // })
                setTimeout(() => {
                    console.log('removed element!')
                }, 2000);
            }
        
            for (let x = 0; x < userItems.length; x++){
                let delay = animationStyle.animationInterval * x
        
                class ItemComponent extends PureComponent {
                    constructor(props){
                        super(props)
                        this.state = {
                            style: animationStyle.itemStyle.start
                        }
                    }
                    
                    shouldComponentUpdate
                    componentDidMount(){
                        let test = <div id='test' className='name'></div>
            propSelector(test)
                        
                        
                        setTimeout(() => {
                            beginAnimation(this)
        
                        }, delay)
                        
                    }
                    componentWillUnmount(){
                        removeElement()
                    }
        
        
                    render (){            
                        
                        
                        return (
                                <div style={this.state.style}>
                                    {userItems[x]}
                                </div>
                        )
                    }
        
                }
        
                convertedItems.push(<ItemComponent/>)
            }

            this.state = {
                animationStyle: animationStyle,
                convertedItems: convertedItems
            }
        
        }catch{
            console.log('Animation Style not found or invalid')
            return <div></div>
        }
    }
        render(){    
            return(
            
                    <div className={this.containerClass}>
                        {/* {itemsToLoad[0]} */}
                        {/* This container will be a spaceholder for the content that will be loaded in */}
                            {this.state.convertedItems.map(item => (
                                <div className={this.state.animationStyle.itemStyle.className}>{item}</div>
                            ))}
                        {/* This container will hold the actual content */}
                    </div>
            
                )
        }
    // }
    
    // catch{
    //         console.log('Animation Style not found or invalid')
    //         return <div></div>
    //     }
    
}

export default OpenAnimator