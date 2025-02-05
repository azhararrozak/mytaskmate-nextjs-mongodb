"use client";

import { useRouter } from 'next/navigation';

const DeleteTask = ({taskId}) => {

  const router = useRouter();

  const handleDelete = async () => {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);

      router.push('/dashboard');
    } else {
      console.error("An error occurred");
    }
  };

  return (
    <button onClick={handleDelete} className="text-white bg-red-500 px-2 py-2 rounded-md hover:underline">Delete Task</button>
  )
};

export default DeleteTask;
