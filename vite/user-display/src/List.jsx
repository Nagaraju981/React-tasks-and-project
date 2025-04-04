import React from 'react'
import { UserDetails } from './UserDetails';

export const List = (props) => {
    const {people} = props;
  return (
    <div>
        {people.map((userDetails)=>{
            return <UserDetails {...userDetails}/>
        })}
    </div>
  )
}
