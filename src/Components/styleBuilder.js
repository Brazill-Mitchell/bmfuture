
/* Creates and returns a new object with "start" and "finish" styles, which 
include the animation speed as a property
 */
exports.styleBuilder = (customStyle) => {
    let userStyle
    if ( customStyle !== null ) {

        userStyle = customStyle
        console.log('tried')
    
    } else {
        userStyle = {
            className: '',
            containerStyle: {
                className: 'no-class',
                start: {
                    opacity: 0
                },
                finish: {
                    opacity: 1
                },
                leave: {
                    opacity: 0
                }
            },
            itemStyle: {
                className: 'no-class',
                start: {
                    position: 'relative',
                    opacity: 0,
                },
                finish: {
                    position: 'relative',
                    opacity: 1,
                },
                leave: {
                    opacity: 0
                }
            },
            animationInterval: 50,
            animationSpeed: 1
        }
    }

    const animationStyle = {}

    Object.keys(userStyle).forEach(property =>{
        animationStyle[property] = userStyle[property]
    })

    animationStyle.itemStyle.finish.transition = userStyle.animationSpeed + 's all ease-in-out'

    return(animationStyle)
}