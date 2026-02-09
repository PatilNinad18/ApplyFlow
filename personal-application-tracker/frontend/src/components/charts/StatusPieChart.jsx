import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = {
  applied: "#9ca3af",
  shortlisted: "#a78bfa",
  interviewing: "#3b82f6",
  offer: "#22c55e",
  rejected: "#ef4444",
};

const StatusPieChart = ({ data }) => {
  // Convert object → array, filter out zero values for cleaner pie
  const chartData = Object.entries(data)
    .filter(([_, value]) => value > 0)
    .map(([status, value]) => ({
      status,
      value,
    }));

  // Show empty state if no applications
  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-400 text-center">No applications data yet</p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="status"
          cx="50%"
          cy="50%"
          outerRadius={90}
        >
          {chartData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[entry.status] || "#6b7280"}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default StatusPieChart;
