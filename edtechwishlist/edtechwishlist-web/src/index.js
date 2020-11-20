import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IdeasComponent, IdeaDetailComponent} from './ideas'
import { Auth0Provider } from "@auth0/auth0-react";
import {ProfileBadgeComponent} from './profiles'


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
      <Auth0Provider
        domain="dev-weu8jlop.us.auth0.com"
        clientId="qESDemWRTmqPh0k7YTRs567P6gXuwNsC"
        redirectUri={window.location.origin}
      >   
        {e(IdeasComponent, ideasElement.dataset)}
      </Auth0Provider>,
        ideasElement
      );
}

const ideaDetailElement = document.querySelectorAll(".edtech-wishlist-detail")

ideaDetailElement.forEach(container => {
    ReactDOM.render(
        e(IdeaDetailComponent, container.dataset),
        container
      );
})

const userProfileBadgeElement = document.querySelectorAll(".edtech-wishlist-profile-badge")

userProfileBadgeElement.forEach(container => {
    ReactDOM.render(
        e(ProfileBadgeComponent, container.dataset),
        container
      );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
