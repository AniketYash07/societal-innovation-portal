import { UsersRound, Search, UserPlus } from "lucide-react";

const students = [
  {
    name: "Aarav Kumar",
    department: "Computer Science Engineering",
    team: "Smart Waste Collection",
    status: "Active",
  },
  {
    name: "Ananya Singh",
    department: "Electronics & Communication",
    team: "Eco-friendly Irrigation",
    status: "Active",
  },
  {
    name: "Rahul Verma",
    department: "Civil Engineering",
    team: "Digital Classroom",
    status: "Active",
  },
  {
    name: "Priya Das",
    department: "Mechanical Engineering",
    team: "Smart Waste Collection",
    status: "Active",
  },
];

export default function Students() {
  return (
    <section className="p-[27px]">
      <div className="flex items-center">
        <div>
          <h1 className="text-[24px] font-bold text-[#131B3C]">
            My Students
          </h1>

          <p className="text-xs text-[#70778A] mt-1.5">
            Manage students participating in university projects.
          </p>
        </div>

        <button className="ml-auto bg-[#6938C8] text-white rounded-lg px-4 py-3 text-xs font-semibold flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          Add Student
        </button>
      </div>

      <div className="mt-6 bg-white border border-[#E7E8EF] rounded-xl">
        <div className="p-4 border-b flex items-center">
          <div className="border rounded-lg h-10 px-3 flex items-center w-[350px]">
            <Search className="w-4 h-4 text-gray-400" />

            <input
              placeholder="Search students..."
              className="ml-2 outline-none text-sm flex-1"
            />
          </div>

          <div className="ml-auto text-xs text-gray-500">
            245+ Students
          </div>
        </div>

        {students.map((student) => (
          <div
            key={student.name}
            className="p-5 flex items-center border-b last:border-b-0"
          >
            <div className="w-11 h-11 rounded-full bg-[#F1EDFF] text-[#6335BF] flex items-center justify-center">
              <UsersRound className="w-5 h-5" />
            </div>

            <div className="ml-4 flex-1">
              <h3 className="text-sm font-bold">
                {student.name}
              </h3>

              <p className="text-[11px] text-gray-500 mt-1">
                {student.department}
              </p>
            </div>

            <div className="text-xs text-gray-600 mr-8">
              {student.team}
            </div>

            <span className="bg-[#EFF8F1] text-[#258149] px-3 py-1.5 rounded-md text-[10px] font-semibold">
              {student.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}