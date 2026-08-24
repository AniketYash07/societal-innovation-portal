import { FolderKanban, CalendarDays, UsersRound } from "lucide-react";

const projects = [
  {
    title: "Smart Waste Collection System",
    team: "5 Students",
    progress: 70,
    date: "15 Jun 2025",
  },
  {
    title: "Eco-friendly Irrigation Solution",
    team: "4 Students",
    progress: 45,
    date: "20 Jun 2025",
  },
  {
    title: "Digital Classroom Platform",
    team: "6 Students",
    progress: 80,
    date: "10 Jun 2025",
  },
];

export default function Projects() {
  return (
    <section className="p-[27px]">
      <h1 className="text-[24px] font-bold text-[#131B3C]">
        Projects & Solutions
      </h1>

      <p className="text-xs text-[#70778A] mt-1.5">
        Track projects and solutions being developed by student teams.
      </p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white border border-[#E7E8EF] rounded-xl p-5"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#F2EFFF] text-[#6836C5] flex items-center justify-center">
                <FolderKanban className="w-5 h-5" />
              </div>

              <div className="ml-3">
                <h2 className="text-sm font-bold">
                  {project.title}
                </h2>

                <p className="text-[10px] text-gray-500 mt-1">
                  {project.team}
                </p>
              </div>
            </div>

            <div className="mt-5 h-2 bg-[#E9EAF0] rounded-full">
              <div
                className="h-full bg-[#8554D5] rounded-full"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            <div className="flex justify-between mt-2 text-[10px]">
              <span>{project.progress}% complete</span>

              <span className="flex items-center gap-1">
                <CalendarDays className="w-3" />
                {project.date}
              </span>
            </div>

            <button className="mt-5 w-full border rounded-md py-2 text-xs text-[#6335BC] font-semibold">
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}