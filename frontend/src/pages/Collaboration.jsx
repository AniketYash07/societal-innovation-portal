import { UserRoundPlus, Check, X } from "lucide-react";

const requests = [
  {
    name: "IIT Dhanbad",
    project: "Water Management Solution",
    type: "Collaboration Request",
  },
  {
    name: "BIT Mesra",
    project: "Rural Digital Education",
    type: "Collaboration Request",
  },
  {
    name: "NIT Jamshedpur",
    project: "Waste Management",
    type: "Collaboration Request",
  },
];

export default function Collaboration() {
  return (
    <section className="p-[27px]">
      <h1 className="text-[24px] font-bold text-[#131B3C]">
        Collaboration Requests
      </h1>

      <p className="text-xs text-[#70778A] mt-1.5">
        Manage collaboration requests from universities and organizations.
      </p>

      <div className="mt-6 space-y-3">
        {requests.map((request) => (
          <div
            key={request.name}
            className="bg-white border border-[#E7E8EF] rounded-xl p-5 flex items-center"
          >
            <div className="w-11 h-11 rounded-full bg-[#F1EDFF] text-[#6938C8] flex items-center justify-center">
              <UserRoundPlus className="w-5 h-5" />
            </div>

            <div className="ml-4 flex-1">
              <h3 className="text-sm font-bold">
                {request.name}
              </h3>

              <p className="text-[11px] text-gray-500 mt-1">
                {request.project}
              </p>
            </div>

            <button className="border border-[#D7EBDD] text-[#258149] px-4 py-2 rounded-md text-xs flex items-center gap-1 mr-2">
              <Check className="w-3.5" />
              Accept
            </button>

            <button className="border border-[#F0D5D5] text-[#D04444] px-4 py-2 rounded-md text-xs flex items-center gap-1">
              <X className="w-3.5" />
              Decline
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}