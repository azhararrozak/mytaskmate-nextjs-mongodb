"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Button from "./Button";

const EditTaskForm = ({ taskData }) => {
  const router = useRouter();

  // Pastikan taskData tidak undefined sebelum digunakan
  const [title, setTitle] = useState(taskData?.title || "");
  const [description, setDescription] = useState(taskData?.description || "");
  const [status, setStatus] = useState(taskData?.status || "Belum Selesai");

  useEffect(() => {
    if (taskData) {
      setTitle(taskData.title || "");
      setDescription(taskData.description || "");
      setStatus(taskData.status || "Belum Selesai");
    }
  }, [taskData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/tasks/${taskData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, status }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      router.push('/dashboard');
    } else {
      console.error("Terjadi kesalahan saat memperbarui task");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto space-y-4">
      <div>
        <label className="block text-gray-700 font-bold mb-1" htmlFor="title">
          Judul Task
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder="Masukkan judul task ..."
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-bold mb-1" htmlFor="description">
          Deskripsi Task
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          placeholder="Masukkan deskripsi task ..."
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div>
        <label className="block text-gray-700 font-bold mb-1" htmlFor="status">
          Status Task
        </label>
        <select
          id="status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Belum Selesai">Belum Selesai</option>
          <option value="Sedang Proses">Sedang Proses</option>
          <option value="Selesai">Selesai</option>
        </select>
      </div>

      <div>
        <Button text="Simpan Perubahan" />
      </div>
    </form>
  );
};

export default EditTaskForm;
