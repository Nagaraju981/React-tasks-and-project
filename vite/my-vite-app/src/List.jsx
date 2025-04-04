import React from 'react'
import { Person } from './Person'

export const List = (props) => {
    const {people} = props;
  return (
    <section>
        {people.map((person)=>{
            return (<Person key={person.id} {...person}/>)
        })}
    </section>
  )
}
