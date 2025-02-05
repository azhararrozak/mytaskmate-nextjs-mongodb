const StatusTask = ({ taskStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Belum Selesai":
        return "bg-red-600";
      case "Sedang Proses":
        return "bg-yellow-500";
      case "Selesai":
        return "bg-green-600";
      default:
        return "bg-gray-400"; // Warna default jika status tidak dikenal
    }
  };

  return (
    <span className={`p-2 rounded w-fit h-fit text-center text-white ${getStatusColor(taskStatus)}`}>
      {taskStatus}
    </span>
  );
};

export default StatusTask;
