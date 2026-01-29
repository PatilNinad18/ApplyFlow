import React, { useState } from "react";import StateCard from "../../components/ui/StateCard";


const Application= () => {
  const [view, setView] = useState("card");

  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setView("card")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition
            ${
              view === "card"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              view === "card" ? "bg-white" : "bg-gray-400"
            }`}
          />
          Card View
        </button>

        <button
          onClick={() => setView("table")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition
            ${
              view === "table"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              view === "table" ? "bg-white" : "bg-gray-400"
            }`}
          />
          Table View
        </button>
      </div>

      {/* Content */}
      {view === "card" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StateCard />
          <StateCard />
          <StateCard />
          <StateCard/>
        </div>
      )}

      {view === "table" && (
        <div className="text-sm text-gray-600">
          Table view coming soon...
        </div>
      )}
    </div>
  );
};

export default Application;
