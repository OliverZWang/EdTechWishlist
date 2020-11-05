// useEffect allows us to run HTTP request
import React, {useEffect, useState} from 'react'; 
import logo from './logo.svg';
import './App.css';

function loadIdeas(callback){
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

function DeleteButton(props){
    const {idea} = props
    const className = props.className ? props.className : 'btn btn-primary btn-sm'
    return <button className={className}>Delete</button>
}

function Idea(props){
    const {idea} = props
    const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
    return <div className={className}>
        <p>{idea.id} - {idea.content} - {idea.user}</p>
        <div>
            <DeleteButton idea={idea} />
        </div>
    </div>
}



function App() {
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
//   [] is where the dependencies go
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            {ideas.map((item, index)=>{
                return <Idea idea={item} className='my-5 py-5 border' key={`${index}-{item.id}`}/>
            })}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
