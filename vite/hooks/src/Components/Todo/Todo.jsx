import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleAddTodo = () => {
    const newItem = {
      title: text,
      status: false,
      id: Date.now() + Math.random(),
    };

    const todoAfterItemAddition = [...todo, newItem];

    setTodo(todoAfterItemAddition);
    setText("");
  };

  //   console.log("text", text);
  //   console.log("todo", todo);

  function handleToggle(id) {
    const todosAfterUpdation = todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );

    setTodo(todosAfterUpdation);
    //react knows that their is a change
  }
  return (
    <div>
      <div>
        <AddTodo
          text={text}
          handleAddTodo={handleAddTodo}
          handleChange={handleChange}
        />
      </div>
      <ul>
        <TodoList todo={todo} handleToggle={handleToggle} />
      </ul>
    </div>
  );
};

export default Todo;

//input ---> to create todo ---> ""
//list--> have all the todos --->[]
