import React, { useState } from "react";

import "./todo.css";

export default function TodoList() {
  const [name, setName] = useState("");
  console.log("TodoRender");

  const [tasks, setTasks] = useState([
    { id: 1, title: "Купить молоко", isDone: false },
    { id: 2, title: "Погладить кошку", isDone: false },
    { id: 3, title: "Погулять с собакой", isDone: false },
  ]);

  function addTasks() {
    if (name.trim() !== "") {
      const newTask = {
        id: Date.now(),
        title: name,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      setName("");
    }
  }

  function tasksToggle(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  function delTasks(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="todoList">
      <div className="todoList_add-tasks-container">
        <input
          className="todoList_add-tasks-input"
          type="text"
          value={name}
          placeholder="Add task title..."
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addTasks} className="todoList_add-tasks-btn">
          Add Task
        </button>
      </div>
      <div className="todoList_tasks-container">
        <ul className="todoList_todo-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`todoList_todo-list-item ${
                task.isDone ? "crossout" : ""
              }`}
            >
              <input
                className="todoList_complited-task-btn"
                type="checkbox"
                checked={task.isDone}
                onChange={() => tasksToggle(task.id)}
              ></input>
              {task.title}
              <button
                onClick={() => delTasks(task.id)}
                className="todoList_del-tasks-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-x-icon lucide-book-x"
                >
                  <path d="m14.5 7-5 5" />
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                  <path d="m9.5 7 5 5" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ); 
}
