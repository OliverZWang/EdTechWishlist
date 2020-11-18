import React, {useEffect, useState} from 'react'
import {IdeasList} from './list'
import {IdeaCreate} from './create'
import {Idea} from './detail'
import {apiIdeaDetail} from './lookup'
import {LoginButton, LogoutButton, UserProfile} from '../auth0'



export function IdeasComponent(props){

    const canPost = props.canPost === "false" ? false : true
    console.log("props:", props)
    const [newIdeas, setNewIdeas] = useState([])

    const handleNewIdea = (newIdea)=>{
        let tempNewIdeas = [...newIdeas]
        tempNewIdeas.unshift(newIdea)
        setNewIdeas(tempNewIdeas)
    }

    return <div className={props.className}>
        <LoginButton/>
        <LogoutButton/>
        <UserProfile/>
        {canPost === true && <IdeaCreate didPost={handleNewIdea} className='col-12 mb-3'/>}
        <IdeasList newIdeas={newIdeas} {...props}/>
    </div> 
}

export function IdeaDetailComponent(props){
    const {ideaId} = props
    const [didLookup, setDidLookup] = useState(false)
    const [idea, setIdea] = useState(null)
    
    useEffect(()=>{
        const handleBackendLookup = (response, status) =>{
            if(status === 200){
                setIdea(response)
            }
            else{
                alert("There's an error finding this Idea. ")
            }
        }
        if(!didLookup){
            apiIdeaDetail(ideaId, handleBackendLookup)
            setDidLookup(true)
        }
    }, [ideaId, didLookup, setDidLookup])
    return idea === null ? null : <Idea idea={idea} className={props.className}/>
}



