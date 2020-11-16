import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IdeasComponent} from './ideas'


const appElement = document.getElementById("root")
if(appElement){
    // console.log("appElement dataset", appElement.dataset)
    ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        appElement
      );
}

const e = React.createElement
const ideasElement = document.getElementById("edtech-wishlist")
if(ideasElement){  

    ReactDOM.render(
        e(IdeasComponent, ideasElement.dataset),
        ideasElement
      );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
