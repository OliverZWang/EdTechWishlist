
import React, { isValidElement } from 'react'
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
            {/* <div className=''>
                <UserPicture user={idea.user}/>
            </div> */}
            <div className='col-11'>
                <article className='media content-section'>
                    <div className='media-body'>
                        <div className='article-metadata'>
                            <UserDisplay className='mr-2' user={idea.user} includeFullName={true}/>
                        </div>
                        <h2><a class="article-title" href='#'>{idea.title}</a></h2>
                        <p className="article-content">{idea.content}</p>
                    </div>
                    
                </article>
                <div className='btn btn-group px-0'>
                    <ActionButton idea={idea} action={{type: "delete", display: "Delete"}} />

                    <ActionButton idea={idea} action={{type: "comment", display: "Comment"}} />

                    {isDetail ? null : <button className='btn btn-outline-primary btn-sm' onClick={handleLink}>View</button>}
                </div>
                
            </div>
        </div>
    </div>
}