import React, {useEffect, useState} from 'react'
// useEffect: run HTTP request, do a lookup on server

import {apiIdeaCreate, apiIdeaList} from './lookup'

export function IdeasComponent(props){

    const textAreaRef = React.createRef()
    const [newIdea, setNewIdea] = useState([])
    // newIdeas is the actual variable to use for the state
    // 
    const [newIdeas, setNewIdeas] = useState([])

    const handleBackendUpdate = (response, status)=>{

        //backend api response handler

        let tempNewIdeas = [... newIdeas]
        // console.log(response, status)
        if(status === 201){
            tempNewIdeas.unshift(response)
            setNewIdeas(tempNewIdeas)
        }
        else{
            console.log(response)
            alert("An error occured. Please try again. ")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newValue = textAreaRef.current.value
        //backend api request
        apiIdeaCreate(newValue, handleBackendUpdate)
        
        textAreaRef.current.value = ''
    }
    return <div className={props.className}>
        <div className='col-12 mb-3'>
            <form onSubmit={handleSubmit}>
                <textarea ref={textAreaRef} required={true} className='form-control' name='idea'>

                </textarea>
                <button type='submit' className='btn btn-primary my-3'>Post Idea</button>
            </form>
        </div>
        <IdeasList newIdeas={newIdeas}/>
    </div> 
}

export function IdeasList(props){
    // console.log(props.newIdeas)
    const [ideasInit, setIdeasInit] = useState([])


    const [ideas, setIdeas] = useState([])

    //to prevent load from being called infinitely
    const [ideasDidSet, setIdeasDidSet] = useState(false)
    // setIdeasInit([...props.newIdeas].concat(ideasInit))

    useEffect(()=>{
        // console.log("This is called")
        // console.log("what is ideaInit? " + ideasInit)
        const final = [...props.newIdeas].concat(ideasInit)
        if (final.length !== ideas.length){
            setIdeas(final)
        }
        
    }, [props.newIdeas, ideas, ideasInit])
    
    useEffect(() => {
        if (ideasDidSet === false){

            const handleIdeaListLookup = (response, status) => {
                //   console.log(response, status)
                if (status === 200){
                    // const finalIdeasInit = [...response].concat(ideasInit)
                    // alert(response)
                    setIdeasInit(response)
                    setIdeasDidSet(true)
                } else {
                    alert("There was an error")
                }
            }
            apiIdeaList(handleIdeaListLookup)
        }
      }, [ideasInit, ideasDidSet, setIdeasDidSet])
    //   console.log("ideas is" + ideas)
      return ideas.map((item, index)=>{
        return <Idea idea={item} className='my-5 py-5 border' key={`${index}-{item.id}`}/>
    })
}

export function ActionButton(props){
    const {idea, action} = props
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