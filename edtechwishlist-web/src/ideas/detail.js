
import React from 'react'
import {UserDisplay, UserPicture} from '../profiles'
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
        <div className='d-flex'>
            <div className=''>
                <UserPicture user={idea.user}/>
            </div>
            <div className='col-11'>
                <UserDisplay user={idea.user} includeFullName={true}/>
                <p>{idea.title}</p>
                <p>{idea.content}</p>
                <div className='btn btn-group px-0'>
                    <ActionButton idea={idea} action={{type: "delete", display: "Delete"}} />

                    <ActionButton idea={idea} action={{type: "comment", display: "Comment"}} />

                    {isDetail ? null : <button className='btn btn-outline-primary btn-sm' onClick={handleLink}>View</button>}
                </div>
            </div>
        </div>
    </div>
}