"use client";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Sleep", done: false },
    { id: 2, text: "Join React class", done: true },
    { id: 3, text: "Do react homework", done: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Todo List App</h1>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter a new task.."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{
            padding: "5px 10px",
            fontSize: "16px",
            border: "1px solid #888",
            borderRadius: "3px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            marginLeft: "5px",
            padding: "5px 12px",
            fontSize: "16px",
            border: "1px solid #555",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: "disc", textAlign: "left", display: "inline-block", marginTop: "20px" }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "8px" }}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              style={{ marginRight: "8px" }}
            />
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
