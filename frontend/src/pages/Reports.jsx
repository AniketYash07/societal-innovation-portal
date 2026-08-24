import { BarChart3, Download } from "lucide-react";

export default function Reports() {
  return (
    <section className="p-[27px]">
      <div className="flex items-center">
        <div>
          <h1 className="text-[24px] font-bold text-[#131B3C]">
            Reports & Analytics
          </h1>

          <p className="text-xs text-[#70778A] mt-1.5">
            Analyze university participation and project performance.
          </p>
        </div>

        <button className="ml-auto bg-[#6938C8] text-white px-4 py-3 rounded-lg text-xs font-semibold flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <Stat title="Challenges" value="24" />
        <Stat title="Active Projects" value="12" />
        <Stat title="Completed Projects" value="2" />
      </div>

      <div className="mt-5 bg-white border border-[#E7E8EF] rounded-xl p-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-[#6938C8]" />
          <h2 className="font-bold text-sm">
            Project Performance
          </h2>
        </div>

        <div className="mt-8 h-48 flex items-end gap-8">
          {[45, 70, 55, 85, 65, 90].map((height, index) => (
            <div
              key={index}
              className="flex-1 bg-[#8554D5] rounded-t-md"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-white border border-[#E7E8EF] rounded-xl p-5">
      <div className="text-3xl font-bold text-[#6938C8]">
        {value}
      </div>

      <div className="text-xs text-gray-500 mt-2">
        {title}
      </div>
    </div>
  );
}