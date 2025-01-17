import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const addTodos = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput(""); // Clear the input field
    }
  };

  const deleteTodos = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={addTodos}>Add Task</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodos(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
