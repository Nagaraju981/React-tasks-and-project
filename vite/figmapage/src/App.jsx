import React, { useState } from 'react'
import data from './data'
import ArticleList from './ArticleList'

function App(){
  const [tours, setTours] = useState(data);
  const removeTour = (indexToRemove) => {
    const newTours = tours.filter((_, index) => index !== indexToRemove);
    setTours(newTours);
  }
  return (
    <main>
      <section>
        <h3>{data.length} Our Tours</h3>
        {tours.length > 0 ? (
          tours.map((tour, index) => {
          return(
            <ArticleList key={index} {...tour} onRemove={() => removeTour(index)}/>
          )
          })) : (<p>No tours Available...</p>)}
      </section>
    </main>
  )
}

export default App