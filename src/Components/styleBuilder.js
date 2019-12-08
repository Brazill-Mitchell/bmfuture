
/* Creates and returns a new object with "start" and "finish" styles, which 
include the animation speed as a property
 */
exports.styleBuilder = (style,speed)=>{

    const animationStyle = {}

    Object.keys(style).forEach(property =>{
        animationStyle[property] = style[property]
    })

    animationStyle.itemsStyle.start.transition = speed + 's'
    animationStyle.itemsStyle.finish.transition = speed + 's'



    console.log(animationStyle)
    return(animationStyle)
}