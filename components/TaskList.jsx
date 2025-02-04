import Link from "next/link";
import DeleteTask from "./DeleteTask";
import StatusTask from "./StatusTask";

function TaskList() {
  return (
    <div className="flex justify-between items-center">
      <div className="box">
        <h1 className="text-bold text-xl w-fit">Membuat Website Marketplace</h1>
        <p className="text-sm text-slate-400">
          Tugas Membuat sebuat website Marketplace dengan nextjs
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <StatusTask />
        <Link href="/edit-task/123">Edit Task</Link>
        <DeleteTask />
      </div>
    </div>
  );
}

export default TaskList;
