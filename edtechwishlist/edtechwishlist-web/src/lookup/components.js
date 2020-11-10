

function lookup(method, endpoint, callback, data){
    let jsonData ;
    if(data){
        jsonData = JSON.stringify(data)
    }
    const xhr = new XMLHttpRequest()
    // const method = 'GET'
    const url = `http://localhost:8000${endpoint}`
    xhr.responseType = 'json'
    xhr.open(method, url)
    xhr.onload = function(){
        // console.log("Response is"+xhr.response['response'])
        callback(xhr.response["response"], xhr.status)

    }
    xhr.onerror = function(e){
        console.log(e)
        callback({"message": "The request was an error"}, 400)
    }
    xhr.send(jsonData)
}


export function loadIdeas(callback){
    lookup("GET", "/ideas/list", callback)
    // const xhr = new XMLHttpRequest()
    // const method = 'GET'
    // const url = 'http://localhost:8000/ideas/list/'
    // const responseType = 'json'
    // xhr.responseType = responseType
    // xhr.open(method, url)
    // xhr.onload = function(){
    //     // console.log("Response is"+xhr.response['response'])
    //     callback(xhr.response["response"], xhr.status)

    // }
    // xhr.onerror = function(e){
    //     console.log(e)
    //     callback({"message": "The request was an error"}, 400)
    // }
    // xhr.send()

}