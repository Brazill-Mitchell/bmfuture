import React, { Component } from 'react'
import styleBuilder from './styleBuilder.js'


/* Take a list of items to create an animation sequence
using the chosen beginning and end style values, and the desired animation speed 
*/

const OpenAnimator = (props)=>{

    const userItems = props.items
    const convertedItems = []

    const animationStyle = styleBuilder.styleBuilder(props.animatorStyles,props.animatorStyles.animationSpeed)


    // const getProps = props

    const beginAnimation = (context) =>{
        context.setState({
            style: animationStyle.itemsStyle.finish
        })
        console.log('Swap Clicked')
    }
    
 



    for (let x = 0; x < userItems.length; x++){
        let delay = props.animatorStyles.animationInterval * x

        class ItemComponent extends Component {
            constructor(props){
                super(props)
                this.state = {
                    style: animationStyle.itemsStyle.start
                }
            }
            
            componentDidMount(){
                
                console.log('swapped')
                
                setTimeout(() => {
                    beginAnimation(this)

                }, delay)
                
            }


            render (){            
                
                
                return (
                    <div>
                        <div style={this.state.style}>
                            {userItems[x]}
                        </div>
                        
                    </div>
                )
            }

        }

        convertedItems.push(<ItemComponent/>)
    }



    return(

        <div className={props.className}>
            {/* {itemsToLoad[0]} */}
            {/* This container will be a spaceholder for the content that will be loaded in */}
            <div>
                {convertedItems.map(item => (
                    <div>{item}</div>
                ))}
            </div>
            {/* This container will hold the actual content */}
            <div>

            </div>
        </div>

    )
}

export default OpenAnimator