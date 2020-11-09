


export function loadIdeas(callback){
    const xhr = new XMLHttpRequest()
    const method = 'GET'
    const url = 'http://localhost:8000/ideas/list/'
    const responseType = 'json'
    xhr.responseType = responseType
    xhr.open(method, url)
    xhr.onload = function(){
        console.log("Response is"+xhr.response['response'])
        callback(xhr.response["response"], xhr.status)

    }
    xhr.onerror = function(e){
        console.log(e)
        callback({"message": "The request was an error"}, 400)
    }
    xhr.send()

}