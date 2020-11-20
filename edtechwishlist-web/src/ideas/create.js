import React from 'react'

import {apiIdeaCreate} from './lookup'


export function IdeaCreate(props){

    const textAreaRef = React.createRef()
    const {didPost} = props

    const handleBackendUpdate = (response, status)=>{

        if(status === 201){
            didPost(response)
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
            <form onSubmit={handleSubmit}>
                <textarea ref={textAreaRef} required={true} className='form-control' name='idea'>

                </textarea>
                <button type='submit' className='btn btn-primary my-3'>Post Idea</button>
            </form>
        </div>
}