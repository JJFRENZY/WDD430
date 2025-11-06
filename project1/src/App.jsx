import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  console.log("[App] mounted");

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((current) => [
      ...current,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((current) =>
      current.map((t) => (t.id === id ? { ...t, completed } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((current) => current.filter((t) => t.id !== id));
  }

  return (
    <>
      <h1 className="header">Todo List</h1>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
