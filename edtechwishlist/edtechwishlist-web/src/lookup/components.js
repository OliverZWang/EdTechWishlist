
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


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
    const csrftoken = getCookie('csrftoken');
    // xhr.setRequestHeader("Content-Type", "application/json")
    // alert("token is" + csrftoken)
    if(csrftoken){
        // xhr.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest")
        // xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
        xhr.setRequestHeader("X-CSRFToken", csrftoken)
    }
    
    xhr.onload = function(){
        // console.log("Response is"+xhr.response['response'])
        if(endpoint === "/ideas/list/"){
            callback(xhr.response["response"], xhr.status)
        }
        else if(endpoint === "/ideas/create/"){
            callback(xhr.response, xhr.status)
        }
        

    }
    xhr.onerror = function(e){
        console.log(e)
        callback({"message": "The request was an error"}, 400)
    }
    xhr.send(jsonData)
}

export function createIdea(newIdea, callback){
    lookup("POST", "/ideas/create/", callback, {content: newIdea})
}


export function loadIdeas(callback){
    lookup("GET", "/ideas/list/", callback)
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