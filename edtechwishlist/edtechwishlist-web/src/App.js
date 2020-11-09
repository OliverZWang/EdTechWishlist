// useEffect allows us to run HTTP request
import React from 'react'; 
import logo from './logo.svg';
import './App.css';

import {IdeasList} from './ideas'

function App() {
    
 
    
//   [] is where the dependencies go
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            <IdeasList/>
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
