import { ClipboardCheck, Clock, CheckCircle } from "lucide-react";

const submissions = [
  {
    title: "Water Wastage Solution",
    student: "Team A",
    status: "Under Review",
  },
  {
    title: "Smart Waste Management",
    student: "Team B",
    status: "Approved",
  },
  {
    title: "Digital Classroom Solution",
    student: "Team C",
    status: "Under Review",
  },
];

export default function Submissions() {
  return (
    <section className="p-[27px]">
      <h1 className="text-[24px] font-bold text-[#131B3C]">
        Submissions
      </h1>

      <p className="text-xs text-[#70778A] mt-1.5">
        Review solutions submitted by student teams.
      </p>

      <div className="mt-6 bg-white border border-[#E7E8EF] rounded-xl overflow-hidden">
        {submissions.map((item) => (
          <div
            key={item.title}
            className="p-5 border-b last:border-b-0 flex items-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#F2EFFF] text-[#6938C8] flex items-center justify-center">
              <ClipboardCheck className="w-5 h-5" />
            </div>

            <div className="ml-4 flex-1">
              <h3 className="text-sm font-bold">
                {item.title}
              </h3>

              <p className="text-[11px] text-gray-500 mt-1">
                Submitted by {item.student}
              </p>
            </div>

            <span
              className={`px-3 py-2 rounded-md text-[10px] font-semibold flex items-center gap-1 ${
                item.status === "Approved"
                  ? "bg-[#EFF8F1] text-[#258149]"
                  : "bg-[#FFF4E8] text-[#E7891E]"
              }`}
            >
              {item.status === "Approved" ? (
                <CheckCircle className="w-3.5" />
              ) : (
                <Clock className="w-3.5" />
              )}

              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}