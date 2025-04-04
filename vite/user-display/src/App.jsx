import React, { useState } from 'react';
import './App.css';
import data from './data';
import { List } from './List';

function App() {
  // Initialize state to hold the sorted data
  const [people, setPeople] = useState(data);

  // Function to sort the list based on the order
  const sortByName = (order) => {
    const sortedData = [...people].sort((a, b) => {
      const nameA = `${a.first_name} ${a.last_name}`.toLowerCase();
      const nameB = `${b.first_name} ${b.last_name}`.toLowerCase();
      
      if (order === 'ASC') {
        return nameA < nameB ? -1 : 1;
      } else if (order === 'DESC') {
        return nameA > nameB ? -1 : 1;
      }
      return 0;
    });
    setPeople(sortedData);
  };

  return (
    <div>
      <div className='sort'>
        <button onClick={() => sortByName('ASC')}>Sort by ASC</button>
        <button onClick={() => sortByName('DESC')}>Sort by DESC</button>
      </div>
      <List people={people} />
    </div>
  );
}

export default App;
