"use client";

import AddTaskForm from "@/components/AddTaskForm";
import HeaderAddTask from "@/components/HeaderAddTask";
import Navbar from "@/components/Navbar";

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 max-w-3xl min-h-screen mt-20">
        <HeaderAddTask />
        <div className="my-10">
          <AddTaskForm />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
