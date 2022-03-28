import { useState, useEffect } from "react";

export default function List({ removeTodo, updateTodo, todos }) {
  const [filterType, setFilterType] = useState(0);

  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    if (filterType === 1) {
      setFilteredTodos(todos.filter((item) => item.isCompleted === false));
    } else if (filterType === 2) {
      setFilteredTodos(todos.filter((item) => item.isCompleted));
    } else {
      setFilteredTodos(todos);
    }
  }, [filterType, todos]);

  const handleCheckboxOnChange = (itemIndex) => {
    updateTodo(
      todos.map((todo, index) => {
        if (itemIndex === index) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return { ...todo };
        }
      })
    );
  };
  const handleRemove = (itemId) =>
    removeTodo(todos.filter((item) => item.id !== itemId));

  const clearCompleted = () =>
    removeTodo(todos.filter((item) => !item.isCompleted));

  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filteredTodos.map((todo, index) => (
            <li key={todo.id}>
              <div className="view">
                <input
                  onChange={() => handleCheckboxOnChange(index)}
                  className="toggle"
                  type="checkbox"
                  checked={todo.isCompleted}
                />
                <label>{todo.todoTitle}</label>
                <button
                  onClick={() => handleRemove(todo.id)}
                  className="destroy"
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>{filteredTodos.length}</strong>
          items left
        </span>
        <ul className="filters">
          <li>
            <button
              className={filterType === 0 ? "selected" : ""}
              onClick={() => setFilterType(0)}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={filterType === 1 ? "selected" : ""}
              onClick={() => setFilterType(1)}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={filterType === 2 ? "selected" : ""}
              onClick={() => setFilterType(2)}
            >
              Completed
            </button>
          </li>
        </ul>
        <button onClick={clearCompleted} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </>
  );
}
