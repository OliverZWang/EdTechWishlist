
import React from 'react'

import {ActionButton} from './buttons'

export function Idea(props){
    const {idea} = props
    const className = props.className ? props.className : 'col-10 mx-auto col-md-6'


    var path = window.location.pathname
    
    var match = path.match(/(?<ideaId>\d+)/)
    var urlIdeaId = match ? match.groups.ideaId : -1

    const isDetail = `${idea.id}` === `${urlIdeaId}`
    



    const handleLink = (event) =>{
        event.preventDefault()
        window.location.href = `/${idea.id}`
    }

    

    
    return <div className={className}>
        <p>{idea.id} - {idea.content} - {idea.user}</p>
        <div>
            <ActionButton idea={idea} action={{type: "delete", display: "Delete"}} />
            <br/>
            <ActionButton idea={idea} action={{type: "comment", display: "Comment"}} />
            <br/>
            {isDetail ? null : <button className='btn btn-outline-primary' onClick={handleLink}>View</button>}
        </div>
    </div>
}