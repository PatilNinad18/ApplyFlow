const StatCard = ({ title, value, subtitle }) => {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/40">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold text-gray-900 mt-1">{value}</h2>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
};

export default StatCard;
