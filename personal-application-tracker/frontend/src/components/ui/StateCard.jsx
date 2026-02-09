const StateCard = ({ application }) => {
  const statusStyles = {
    Applied: "bg-blue-100 text-blue-700",
    Accepted: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
          {application.company[0]}
        </div>

        <div className="flex-1">
          <h4 className="text-base font-semibold">
            {application.company}
          </h4>
          <p className="text-sm text-gray-600">{application.role}</p>
          <p className="text-xs text-gray-500 mt-1">
            Experience: {application.experience}
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <span
          className={`px-4 py-1.5 text-sm font-medium rounded-full ${
            statusStyles[application.status]
          }`}
        >
          {application.status}
        </span>
      </div>
    </div>
  );
};

export default StateCard;
