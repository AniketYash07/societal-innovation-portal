import { UsersRound, MapPin, Rocket, Trophy } from "lucide-react";

const impact = [
  {
    value: "245+",
    label: "Students Involved",
    icon: UsersRound,
  },
  {
    value: "24",
    label: "Challenges Worked On",
    icon: MapPin,
  },
  {
    value: "12",
    label: "Solutions Developed",
    icon: Rocket,
  },
  {
    value: "2",
    label: "Projects Completed",
    icon: Trophy,
  },
];

export default function Impact() {
  return (
    <section className="p-[27px]">
      <h1 className="text-[24px] font-bold text-[#131B3C]">
        Impact Tracking
      </h1>

      <p className="text-xs text-[#70778A] mt-1.5">
        Track the social impact created through university projects.
      </p>

      <div className="grid grid-cols-4 gap-4 mt-6">
        {impact.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="bg-white border border-[#E7E8EF] rounded-xl p-6 text-center"
            >
              <Icon className="w-8 h-8 mx-auto text-[#6938C8]" />

              <div className="text-2xl font-bold mt-4">
                {item.value}
              </div>

              <div className="text-xs text-gray-500 mt-2">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}