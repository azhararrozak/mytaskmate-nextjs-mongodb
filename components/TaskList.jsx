"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DeleteTask from "./DeleteTask";
import StatusTask from "./StatusTask";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data.tasks);
    };

    fetchTasks();
  }, [tasks]);

  return (
    <div className="my-10">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="flex justify-between items-center space-x-4 p-4 bg-white shadow-md rounded-lg mb-4"
        >
          <div className="box">
            <h1
              className={`text-bold text-xl w-fit ${
                task.status == "Selesai" && "line-through"
              }`}
            >
              {task.title}
            </h1>
            <p
              className={`text-sm text-slate-400 ${
                task.status == "Selesai" && "line-through"
              }`}
            >
              {task.description}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <StatusTask taskStatus={task.status} />
            <Link href={`/edit-task/${task._id}`}>Edit Task</Link>
            <DeleteTask taskId={task._id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
