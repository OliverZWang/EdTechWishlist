import React, {useState} from 'react'
import {IdeasList} from './list'
import {IdeaCreate} from './create.js'


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
        {canPost === true && <IdeaCreate didPost={handleNewIdea} className='col-12 mb-3'/>}
        <IdeasList newIdeas={newIdeas} {...props}/>
    </div> 
}





