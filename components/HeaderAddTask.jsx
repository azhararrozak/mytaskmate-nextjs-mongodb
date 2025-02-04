import Link from "next/link";

const HeaderAddTask = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/dashboard">
        <h1 className="text-2xl font-bold">Task List</h1>
      </Link>
      <div>
        <Link
          className="text-white bg-blue-500 px-4 py-2 rounded-lg"
          href="/add-task"
        >
          Add Task
        </Link>
      </div>
    </div>
  );
};

export default HeaderAddTask;
