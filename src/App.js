import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header/Header";
import TaskColumn from "./components/task/TaskColumn";

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        setTasks(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  // Categorize tasks based on their status
  const todoTasks = tasks.filter((task) => task.status === "Todo");
  const inProgressTasks = tasks.filter((task) => task.status === "In progress");
  const doneTasks = tasks.filter((task) => task.status === "Done");
  const backLogTasks = tasks.filter((task) => task.status === "Backlog");

  return (
    <div className="app">
      <Header />
      <main className="task-columns-container">
        <div className="columns-container">
          <TaskColumn status={"Todo"} tasks={todoTasks} users={users} />
          <TaskColumn
            status={"In Progress"}
            tasks={inProgressTasks}
            users={users}
          />
          {/* <TaskColumn status={"Done"} tasks={doneTasks} users={users} /> */}
          <TaskColumn status={"Backlog"} tasks={backLogTasks} users={users} />
        </div>
      </main>
    </div>
  );
}

export default App;
