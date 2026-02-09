import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApplication } from "../api/applications.api";

const AddApplications = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    application: "job",
    status: "applied",
    appliedDate: "",
    interviewDate: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.companyName || !formData.role) {
      alert("Company and Role are required");
      return;
    }

    try {
      setLoading(true);
      await createApplication(formData);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add application");
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full px-4 py-2 rounded-xl bg-white text-gray-900 border border-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none";

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Add New Application
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Company Name
            </label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              type="text"
              placeholder="Company Name"
              className={inputBase}
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Role Title
            </label>
            <input
              name="role"
              value={formData.role}
              onChange={handleChange}
              type="text"
              placeholder="Frontend Developer"
              className={inputBase}
            />
          </div>

          {/* Type + Status */}
          <div className="grid grid-cols-2 gap-4">
            <select
              name="application"
              value={formData.application}
              onChange={handleChange}
              className={inputBase}
            >
              <option value="job">Job</option>
              <option value="internship">Internship</option>
              <option value="hackathon">Hackathon</option>
              <option value="scholarship">Scholarship</option>
              <option value="fellowship">Fellowship</option>
            </select>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={inputBase}
            >
              <option value="applied">Applied</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="interviewing">Interviewing</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            {/* Applied Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Applied Date
              </label>
              <input
                name="appliedDate"
                value={formData.appliedDate}
                onChange={handleChange}
                type="date"
                className={inputBase}
              />
            </div>

            {/* Interview Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Interview Date
              </label>
              <input
                name="interviewDate"
                value={formData.interviewDate}
                onChange={handleChange}
                type="date"
                className={inputBase}
              />
            </div>
          </div>


          {/* Notes */}
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Add notes about this application..."
            className={`${inputBase} resize-none`}
          />

          <button
            id="auth-button"
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 rounded-full font-semibold shadow-lg hover:scale-[1.02] transition-transform"
          >
            {loading ? "Saving..." : "Save Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddApplications;
