import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <MyButton />
    </>
  )
}
function MyButton(){
  const [count, setCount] = useState(0)
  const handleAddition = () => {
    setCount(count+1);
  }
  const handleSubtraction = () => {
    setCount(count-1);
  }
  const handleDouble = () => {
    setCount(count+2);
  }
  return(
    <>
  <h2>Counter</h2>
  <h3>{count}</h3>
  <button onClick={handleAddition}>+</button>
  <button onClick={handleSubtraction}>-</button>
  <button onClick={handleDouble}>Double</button>
    </>
  )
  
}

export default App
