import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>Todo App</h1>
        </header>
        <Form todos={todos} addTodo={setTodos} />
        <List removeTodo={setTodos} updateTodo={setTodos} todos={todos} />
      </section>
    </>
  );
}

export default App;
