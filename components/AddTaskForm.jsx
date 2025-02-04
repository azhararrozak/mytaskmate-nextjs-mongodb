const AddTaskForm = () => {
    return (
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-1" htmlFor="judul">
            Judul Task
          </label>
          <input
            type="text"
            id="judul"
            name="judul"
            placeholder="Masukkan judul task ..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <div>
          <label className="block text-gray-700 font-bold mb-1" htmlFor="deskripsi">
            Deskripsi Task
          </label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            placeholder="Masukkan deskripsi task ..."
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
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Belum Selesai">Belum Selesai</option>
            <option value="Sedang Proses">Sedang Proses</option>
            <option value="Selesai">Selesai</option>
          </select>
        </div>
  
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            Add Task
          </button>
        </div>
      </form>
    );
  };
  
  export default AddTaskForm;
  