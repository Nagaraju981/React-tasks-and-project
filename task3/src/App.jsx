import './App.css';
// import Button from './Button/Button';

// function App() {
//   let isUserAuthentication= false;

//   return (
//     <>
//     {isUserAuthentication ? (<h1>User Authenticated</h1>)
//     : (<h1>User not Authenticated</h1>)}
//     </>
//   );
// }

// export default App;
import React from 'react'
import { Greetings } from './Greeting/Greetings';

export const App = () => {
  return (
    <div className='App'>
      <Greetings />
    </div>
  )
}

