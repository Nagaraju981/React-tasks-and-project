import React from 'react'

export const UserDetails = (props) => {
    const {id, avatar, first_name, last_name, address, karma, followers, posts, is_following} =props;
  return (
    <div className='main'>
        <div className='container'>
            <div className='image'><img src={avatar}></img></div>
            <div>{first_name}&nbsp;&nbsp;{last_name}</div>
            <div>{address}</div>
            <div>{karma}</div>
            <div>Karma</div>
            <div>{followers}</div>
            <div>followers</div>
            <div>{posts}</div>
            <div>Posts</div>
            <div className='follow'>{is_following? (<div>Unfollow</div>) : (<div>follow</div>)}</div>
        </div>
    </div>
  )
}
