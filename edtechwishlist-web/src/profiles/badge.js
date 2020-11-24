import React, {useState, useEffect} from 'react'
import {apiProfileDetail} from './lookup'
import {UserDisplay, userPicture} from './components'
import { UserPicture } from '.'

function ProfileBadge(props){
    const {user} = props
    console.log(user)
    const handleEmail = (event) =>{
        console.log("trying to email", event)
    }
return user ? <div>
        <UserPicture user={user} hideLink/>
        <p><UserDisplay user={user} includeFullName hideLink/></p>

        <p>Profession: {user.profession}</p>
        <p>Bio: {user.bio}</p>
        <button onClick={handleEmail} className='btn btn-primary'>Email</button>
    </div> : null
}


export function ProfileBadgeComponent(props){
    const {username} = props
    //perform a lookup

    const [didLookup, setDidLookup] = useState(false)
    const [profile, setProfile] = useState(null)

    const handleBackendLookup = (response, status) =>{
        if(status === 200){
            setProfile(response)
        }
    }

    useEffect(()=>{
        if(!didLookup){
            apiProfileDetail(username, handleBackendLookup)
            setDidLookup(true)
        }
    }, [username, didLookup, setDidLookup])
    return (!didLookup) ? <h1>"Loading..."</h1> :  (profile ? <ProfileBadge user={profile}/> : null)
    // return profile ? <span>{profile.first_name}</span> : <span>{"Profile DNE"}</span>
}