
import React from 'react'

import {ActionButton} from './buttons'

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