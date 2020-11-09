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

export function DeleteButton(props){
    // const {idea} = props
    const className = props.className ? props.className : 'btn btn-primary btn-sm'
    return <button className={className}>Delete</button>
}

export function Idea(props){
    const {idea} = props
    const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
    return <div className={className}>
        <p>{idea.id} - {idea.content} - {idea.user}</p>
        <div>
            <DeleteButton idea={idea} />
        </div>
    </div>
}