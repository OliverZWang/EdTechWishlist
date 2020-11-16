import {backendLookup} from '../lookup'


export function apiIdeaCreate(newIdea, callback){
    backendLookup("POST", "/ideas/create/", callback, {content: newIdea})
}


export function apiIdeaList(callback){
    backendLookup("GET", "/ideas/list/", callback)
}