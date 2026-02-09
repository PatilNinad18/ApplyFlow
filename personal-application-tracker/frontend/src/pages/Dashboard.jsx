import React, { useEffect, useState, useCallback } from "react";
import StatCard from "../components/ui/StatCard";
import GlassCard from "../components/ui/GlassCard";
import StatusPieChart from "../components/charts/StatusPieChart";
import ApplicationsLineChart from "../components/charts/ApplicationsLineChart";

import { getApplications } from "../api/applications.api";
import { getStats } from "../api/stats.api";
import { getMyProfile } from "../api/users.api";
import useDashboardRefresh from "../utils/useDashboardRefresh";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState(null);
  const [user, setUser] = useState(null);

  const fetchDashboardData = useCallback(async () => {
    try {
      const [appsRes, statsRes, userRes] = await Promise.all([
        getApplications(),
        getStats(),
        getMyProfile(),
      ]);

      setApplications(appsRes.data.applications);
      setStats(statsRes.data.stats);
      setUser(userRes.data.user);
      setLoading(false);
    } catch (error) {
      console.error("Dashboard fetch failed:", error);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  // Refetch dashboard data on window focus and every 30 seconds
  useDashboardRefresh(fetchDashboardData, 30);

  if (loading) return <p className="p-6">Loading Dashboard...</p>;
  if (!stats || !user) return <p className="p-6">Failed to load dashboard</p>;

  return (
    <div className="w-full p-4">
      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <StatCard
          title="Total Applications"
          value={stats.totalApplications}
          subtitle="All time"
        />

        <StatCard
          title="Applied"
          value={stats.statusCounts.applied}
          subtitle="Initial stage"
        />

        <StatCard
          title="Interviews"
          value={stats.statusCounts.interviewing}
          subtitle="In progress"
        />

        <StatCard
          title="Offers"
          value={stats.statusCounts.offer}
          subtitle="Received"
        />

        <StatCard
          title="Rejected"
          value={stats.statusCounts.rejected}
          subtitle="Closed"
        />
      </div>

      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Line Chart */}
        <GlassCard className="md:col-span-2 h-80">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Applications Over Time
          </h3>

          <div className="w-full h-64">
            <ApplicationsLineChart applications={applications} />
          </div>
        </GlassCard>

        {/* Pie Chart */}
        <GlassCard className="h-80">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Application Status
          </h3>

          <div className="w-full h-64">
            <StatusPieChart data={stats.statusCounts} />
          </div>
        </GlassCard>
      </div>

      {/* RECENT APPLICATIONS */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Recent Applications
        </h2>

        {applications.length === 0 ? (
          <p className="text-gray-500">No applications added yet</p>
        ) : (
          <div className="space-y-3">
            {applications.slice(0, 3).map((app) => (
              <div
                key={app._id}
                className="flex justify-between items-center p-4 rounded-xl bg-white shadow-sm border"
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {app.companyName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {app.role}
                  </p>
                </div>

                <span className="text-sm font-medium capitalize text-indigo-600">
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
