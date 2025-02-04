const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
    >
      {text}
    </button>
  );
};

export default Button;
