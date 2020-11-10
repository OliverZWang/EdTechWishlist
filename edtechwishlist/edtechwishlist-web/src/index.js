import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IdeasComponent} from './ideas'


const appElement = document.getElementById("root")
if(appElement){
    ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        appElement
      );
}

const ideasElement = document.getElementById("edtech-wishlist")
if(ideasElement){  
    ReactDOM.render(
        <React.StrictMode>
          <IdeasComponent />
        </React.StrictMode>,
        ideasElement
      );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
