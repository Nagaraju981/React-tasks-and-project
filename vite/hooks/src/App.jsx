//

//example-2

// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton count={count} handleClick={handleClick} />
//       <MyButton count={count} handleClick={handleClick} />
//     </div>
//   );
// }

// function MyButton({ count, handleClick }) {
//   return <button onClick={handleClick}>Clicked {count} times</button>;
// }

//example-3
import React from "react";
import Todo from "./Components/Todo/Todo";

const App = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

export default App;
