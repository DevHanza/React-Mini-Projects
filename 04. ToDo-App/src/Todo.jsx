import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: crypto.randomUUID(),
      })
    );

    setInput("");

    console.log(todos);
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New ToDo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>

      <ul className="todos">
        {todos.map(({ text, id }) => {
          return (
            <li className="todo" key={id}>
              <span>{text}</span>
              <button
                className="close"
                onClick={() => {
                  removeTodo(id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
