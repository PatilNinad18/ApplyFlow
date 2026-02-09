import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ApplicationsLineChart = ({ applications }) => {
  // Group applications by month using appliedDate (or fallback to createdAt)
  // Store date object along with count for proper sorting
  const groupedData = applications.reduce((acc, app) => {
    const date = new Date(app.appliedDate || app.createdAt);
    const month = date.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    if (!acc[month]) {
      acc[month] = { count: 0, date: date };
    }
    acc[month].count += 1;
    return acc;
  }, {});

  // Convert object → array and sort chronologically by date
  const chartData = Object.entries(groupedData)
    .map(([month, data]) => ({
      month,
      applications: data.count,
      date: data.date,
    }))
    .sort((a, b) => a.date - b.date)
    .map(({ month, applications }) => ({ month, applications })); // Remove date from final output

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
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="applications"
          stroke="#3b82f6"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ApplicationsLineChart;
