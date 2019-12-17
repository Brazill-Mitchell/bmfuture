import jsxToString from 'jsx-to-string'

/* Split the user's JSX element to identify it's props
Return a list of props
*/

export function propSelector(component) {
    // let props = {}
    let breaks = ['}','>','\'','" ']
    let fields = jsxToString(component).split(/(=)/)
    for (let x = 0; x < fields.length; x++){

        // Get the left side
        if(fields[x] === '='){

            const leftSide = getLeftSide().split('>}"\'')

            for (let charLeft = leftSide.length; charLeft > 0; charLeft--){
                if (breaks.includes(leftSide[charLeft])){
                    // Add from here to = sign together to form the property name
                    // Stop after name is created 
                }
            }

        // Get right side
        }
    }

}


// Retrieve chunks from the left side and concatenate them into a string
function getLeftSide(){

    let leftString = ''

    return leftString
}

// Retrieve chunks from the right side and concatenate them into a string
function getRightSide(){

    let rightString = ''

    return rightString

}