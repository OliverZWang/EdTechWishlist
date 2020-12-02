
import React from 'react'



export function UserLink(props){
    const {username} = props

    const handleUserLink = (event) =>{
        window.location.href = `/profile/${username}`
    }
    return <span className='pointer' onClick={handleUserLink}>
        {props.children}
    </span>
}

export function UserDisplay(props){
    const {user, includeFullName, hideLink, className} = props
    const nameDisplay = includeFullName ? `${user.first_name} ${user.last_name} ` : null


    return <div className={className}>
        {nameDisplay}
        {hideLink ? `@${user.username}` : <UserLink username={user.username}>@{user.username} </UserLink>}
    </div>
}

export function UserPicture(props){
    const {user, hideLink} = props
    // const userProfileSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-dark text-white'>{user.username[0]}</span>
    const userProfileSpan = <img className='rounded-circle article-img' src={user.image} />
    return hideLink ? userProfileSpan : <UserLink username={user.username}>{userProfileSpan}</UserLink>
    // return userProfileSpan
}
