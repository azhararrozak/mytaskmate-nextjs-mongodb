"use client";

import { useState, useEffect } from "react";
import { useParams } from 'next/navigation'
import EditTaskForm from "@/components/EditTaskForm";
import HeaderAddTask from "@/components/HeaderAddTask";
import Navbar from "@/components/Navbar";

const EditTask = () => {
  const [task, setTask] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`/api/tasks/${id}`);
      const data = await response.json();
      setTask(data.task);
    };

    fetchTask();
  }, []);


  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 max-w-3xl min-h-screen mt-20">
        <HeaderAddTask />
        <div className="my-10">
          <EditTaskForm taskData={task} />
        </div>
      </div>
    </div>
  )
}

export default EditTask