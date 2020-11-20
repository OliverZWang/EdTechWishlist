import React, {useEffect, useState} from 'react'
// useEffect: run HTTP request, do a lookup on server

import {apiIdeaList} from './lookup'
import {Idea} from './detail'


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
                    // console.log(JSON.stringify(response))
                    setIdeasInit(response)
                    setIdeasDidSet(true)
                } else {
                    alert("There was an error")
                }
            }
            apiIdeaList(props.username, handleIdeaListLookup)
        }
      }, [ideasInit, ideasDidSet, props.username, setIdeasDidSet])
    //   console.log("ideas is" + ideas)
      return ideas.map((item, index)=>{
        return <Idea idea={item} className='my-5 py-5 border' key={`${index}-{item.id}`}/>
    })
}