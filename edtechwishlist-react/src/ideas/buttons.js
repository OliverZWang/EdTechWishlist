
import React from 'react'
// useEffect: run HTTP request, do a lookup on server



export function ActionButton(props){
    const {action} = props
    // const [justClicked, setJustClicked] = useState(1)
    const className = props.className ? props.className : 'btn btn-primary btn-sm'
    const actionDisplay = action.display ? action.display : 'Action'
    const handleClick = (event) =>{
        event.preventDefault()
        if (action.type === 'delete'){
            console.log("Trying to delete the idea")
            
            // setJustClicked(justClicked+1)
            
        }
    }
return <button className={className} onClick={handleClick} >{actionDisplay} </button>
}