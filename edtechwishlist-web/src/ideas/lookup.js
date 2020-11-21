import {backendLookup} from '../lookup'


export function apiIdeaCreate(newIdea, callback){
    backendLookup("POST", "/ideas/create/", callback, {content: newIdea})
}


export function apiIdeaList(username, callback){
    let endpoint = "/ideas/list/"
    if(username){
        endpoint = `/ideas/list/?username=${username}`
    }
    backendLookup("GET", endpoint, callback)
}

export function apiIdeaDetail(ideaId, callback){

    backendLookup("GET", `/ideas/${ideaId}`, callback)
}
