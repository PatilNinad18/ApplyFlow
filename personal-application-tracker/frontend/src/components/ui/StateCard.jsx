import React from "react";

const StateCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 max-w-md">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
          C
        </div>

        <div className="flex-1">
          <h4 className="text-base font-semibold text-gray-900">
            Company Name
          </h4>
          <p className="text-sm text-gray-600">Frontend Developer</p>
          <p className="text-xs text-gray-500 mt-1">
            Experience: 0–2 years
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-end">
        <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-green-100 text-green-700">
          Applied
        </span>
      </div>
    </div>
  );
};

export default StateCard;
