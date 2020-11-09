import React, {useEffect, useState} from 'react'

import {loadIdeas} from '../lookup'

export function IdeasList(props){

    const [ideas, setIdeas] = useState([])

    useEffect(() => {
        const myCallback = (response, status) => {
          console.log(response, status)
          if (status === 200){
            setIdeas(response)
          } else {
            alert("There was an error")
          }
        }
        loadIdeas(myCallback)
      }, [])

      return ideas.map((item, index)=>{
        return <Idea idea={item} className='my-5 py-5 border' key={`${index}-{item.id}`}/>
    })
}

export function ActionButton(props){
    const {idea, action} = props
    const className = props.className ? props.className : 'btn btn-primary btn-sm'
    const actionDisplay = action.display ? action.display : 'Action'
    const handleClick = (event) =>{
        event.preventDefault()
        if (action.type === 'delete'){
            console.log("Trying to delete the idea")
        }
    }
    return <button className={className} onClick={handleClick} >{actionDisplay}</button>
}

export function Idea(props){
    const {idea} = props
    const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
    return <div className={className}>
        <p>{idea.id} - {idea.content} - {idea.user}</p>
        <div>
            <ActionButton idea={idea} action={{type: "delete", display: "Delete"}} />
            <br/>
            <ActionButton idea={idea} action={{type: "comment", display: "Comment"}} />
        </div>
    </div>
}