import {backendLookup} from '../lookup'

export function apiProfileDetail(username, callback){
    backendLookup("GET", `/profiles/api/${username}`, callback)
}