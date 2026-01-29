import React from "react";

const AddApplications = () => {
  

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40">
        
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Add New Application
        </h2>

        <form className="space-y-5">

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-2 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Role Title */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Role Title
            </label>
            <input
              type="text"
              placeholder="Frontend Developer"
              className="w-full px-4 py-2 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Opportunity + Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Application Type
              </label>
              <select className="w-full px-4 py-2 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Job</option>
                <option>Internship</option>
                <option>Hackathon</option>
                <option>Scholarship</option>
                <option>Fellowship</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Status
              </label>
              <select className="w-full px-4 py-2 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Applied</option>
                <option>Interviewing</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date Applied
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Interview Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Notes
            </label>
            <textarea
              rows="4"
              placeholder="Add notes about this application..."
              className="w-full px-4 py-2 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* Button */}
          <button
            id="auth-button"
            type="submit"
            className="w-full mt-4 py-3 rounded-full  font-semibold shadow-lg hover:scale-[1.02] transition-transform"
          >
            Save Application
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddApplications;
