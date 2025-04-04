import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
    <div>
      <div>Counters that update seperately</div>
      <Myapp count1 = {count} handleClick={handleClick}/>
      <Myapp count1 = {count} handleClick={handleClick}/>
    </div>
  )
}
function Myapp({count1, handleClick}){
  
  return (
    <button onClick={handleClick}>
      Clicked {count1} times
    </button>
  )
}

export default App


