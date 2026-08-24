import {
  Search,
  Filter,
  MapPin,
  CalendarDays,
  UsersRound,
  ChevronRight,
} from "lucide-react";

const challenges = [
  {
    title: "Water Wastage in Irrigation in Several Villages",
    category: "Water Management",
    location: "Dhanbad, Jharkhand",
    date: "20 May 2025",
    team: "5 Students",
    status: "In Progress",
    statusColor: "blue",
  },
  {
    title: "Improper Waste Management in Urban Areas",
    category: "Environment",
    location: "Ranchi, Jharkhand",
    date: "18 May 2025",
    team: "4 Students",
    status: "Assigned",
    statusColor: "green",
  },
  {
    title: "Lack of Digital Learning Facilities in Rural Schools",
    category: "Education",
    location: "Hazaribagh, Jharkhand",
    date: "15 May 2025",
    team: "6 Students",
    status: "In Progress",
    statusColor: "blue",
  },
];

export default function Challenges() {
  return (
    <section className="p-[27px]">
      <div className="flex items-center">
        <div>
          <h1 className="text-[24px] font-bold text-[#131B3C]">
            Assigned Challenges
          </h1>

          <p className="text-xs text-[#70778A] mt-1.5">
            Manage all challenges assigned to your university.
          </p>
        </div>

        <button className="ml-auto bg-[#6938C8] text-white rounded-lg px-4 py-3 text-xs font-semibold">
          + Browse Challenges
        </button>
      </div>

      <div className="mt-6 bg-white border border-[#E7E8EF] rounded-xl overflow-hidden">
        <div className="p-4 border-b flex gap-3">
          <div className="flex-1 h-10 border rounded-lg flex items-center px-3">
            <Search className="w-4 h-4 text-gray-400" />

            <input
              placeholder="Search challenges..."
              className="ml-2 flex-1 outline-none text-sm"
            />
          </div>

          <button className="border rounded-lg px-4 flex items-center gap-2 text-sm">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        {challenges.map((challenge) => (
          <div
            key={challenge.title}
            className="p-5 border-b last:border-b-0 hover:bg-[#FCFBFF]"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <span className="inline-block bg-[#F1EDFF] text-[#6335BF] px-2 py-1 rounded text-[10px] font-semibold">
                  {challenge.category}
                </span>

                <h2 className="text-sm font-bold mt-2 text-[#171E3A]">
                  {challenge.title}
                </h2>

                <div className="flex gap-5 mt-3 text-[11px] text-[#647087]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5" />
                    {challenge.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-3.5" />
                    {challenge.date}
                  </span>

                  <span className="flex items-center gap-1">
                    <UsersRound className="w-3.5" />
                    {challenge.team}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`inline-block px-3 py-2 rounded-md text-[10px] font-semibold ${
                    challenge.statusColor === "green"
                      ? "bg-[#EFF8F1] text-[#258149]"
                      : "bg-[#EDF5FF] text-[#1C68C9]"
                  }`}
                >
                  {challenge.status}
                </span>

                <button className="block mt-4 text-[#6335BC] text-[10px] font-semibold ml-auto">
                  View Details
                  <ChevronRight className="w-3 inline" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}