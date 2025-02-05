"use client";

import HeaderAddTask from "@/components/HeaderAddTask";
import Navbar from "@/components/Navbar";
import TaskList from "@/components/TaskList";

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 max-w-3xl min-h-screen mt-20">
        <HeaderAddTask />
        <TaskList />
      </div>
    </div>
  );
};

export default DashboardPage;
