import { useEffect, useState, useContext } from "react";
import {
  getApplications,
  deleteApplication,
} from "../../api/applications.api.js";
import EditApplicationModal from "../../components/EditApplicationModal.jsx";
import { SearchContext } from "../../app/providers/SearchProvider";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);
  const [viewMode, setViewMode] = useState("table"); // "table" or "card"
  const { searchTerm } = useContext(SearchContext);

  const fetchApplications = async () => {
    try {
      const res = await getApplications();
      setApplications(res.data.applications);
    } catch (error) {
      alert("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Delete this application?");
    if (!confirmed) return;

    try {
      await deleteApplication(id);
      setApplications((prev) =>
        prev.filter((app) => app._id !== id)
      );
    } catch {
      alert("Delete failed");
    }
  };

  const filteredApplications = applications.filter((app) => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return true;
    const company = (app.companyName || "").toLowerCase();
    const role = (app.role || "").toLowerCase();
    const type = (app.application || "").toLowerCase();
    const status = (app.status || "").toLowerCase();

    return (
      company.includes(q) ||
      role.includes(q) ||
      type.includes(q) ||
      status.includes(q)
    );
  });

  if (loading) {
    return (
      <div className="p-6 text-gray-600">
        Loading applications...
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">
            My Applications
          </h1>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("table")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              viewMode === "table"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            📋 Table
          </button>
          <button
            onClick={() => setViewMode("card")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              viewMode === "card"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            📇 Card
          </button>
        </div>
      </div>
        {viewMode === "table" ? (
        // TABLE VIEW
        <div className="overflow-x-auto rounded-xl shadow bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="p-3">Company</th>
                <th className="p-3">Role</th>
                <th className="p-3">Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Applied Date</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredApplications.map((app) => (
                <tr
                  key={app._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-medium">
                    {app.companyName}
                  </td>
                  <td className="p-3">{app.role}</td>
                  <td className="p-3 capitalize">
                    {app.application}
                  </td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      app.status === "offer" ? "bg-green-100 text-green-700" :
                      app.status === "rejected" ? "bg-red-100 text-red-700" :
                      app.status === "interviewing" ? "bg-blue-100 text-blue-700" :
                      app.status === "shortlisted" ? "bg-purple-100 text-purple-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="p-3 text-gray-600">
                    {app.appliedDate ? new Date(app.appliedDate).toLocaleDateString() : "-"}
                  </td>
                  <td className="p-3 text-right space-x-4">
                    <button
                      className="text-blue-600 font-medium hover:text-blue-800 transition"
                      onClick={() => setSelectedApp(app)}
                    >
                      Edit
                    </button>

                    <button
                      className="text-red-600 font-medium hover:text-red-800 transition"
                      onClick={() =>
                        handleDelete(app._id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

            {filteredApplications.length === 0 && (
            <div className="p-6 text-center text-gray-500">
              No applications added yet
            </div>
          )}
        </div>
      ) : (
        // CARD VIEW
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApplications.map((app) => (
            <div
              key={app._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {app.companyName}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {app.role}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ml-2 ${
                  app.status === "offer" ? "bg-green-100 text-green-700" :
                  app.status === "rejected" ? "bg-red-100 text-red-700" :
                  app.status === "interviewing" ? "bg-blue-100 text-blue-700" :
                  app.status === "shortlisted" ? "bg-purple-100 text-purple-700" :
                  "bg-gray-100 text-gray-700"
                }`}>
                  {app.status}
                </span>
              </div>

              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">Type:</span>
                  <span className="capitalize">{app.application}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Applied:</span>
                  <span>{app.appliedDate ? new Date(app.appliedDate).toLocaleDateString() : "-"}</span>
                </div>
                {app.interviewDate && (
                  <div className="flex justify-between">
                    <span className="font-medium">Interview:</span>
                    <span>{new Date(app.interviewDate).toLocaleDateString()}</span>
                  </div>
                )}
              </div>

              {app.notes && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-700 max-h-24 overflow-y-auto">
                  <p className="font-medium mb-1">Notes:</p>
                  <p>{app.notes}</p>
                </div>
              )}

              <div className="flex gap-2 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setSelectedApp(app)}
                  className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(app._id)}
                  className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {filteredApplications.length === 0 && (
            <div className="col-span-full p-12 text-center text-gray-500">
              No applications added yet
            </div>
          )}
        </div>
      )}

      {/* EDIT MODAL */}
      {selectedApp && (
        <EditApplicationModal
          application={selectedApp}
          onClose={() => setSelectedApp(null)}
          onUpdated={(updatedApp) => {
            setApplications((prev) =>
              prev.map((app) =>
                app._id === updatedApp._id
                  ? updatedApp
                  : app
              )
            );
          }}
        />
      )}
    </div>
  );
};

export default Applications;
