const ToggleSwitch = ({ enabled, setEnabled }) => {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 
        ${enabled ? "bg-indigo-500" : "bg-gray-300"}`}
    >
      <span
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300
          ${enabled ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
};

export default ToggleSwitch;