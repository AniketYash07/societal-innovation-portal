import {
  Bell,
  CheckCircle,
  UsersRound,
  CalendarDays,
} from "lucide-react";

const notifications = [
  {
    text: "Your solution for Water Wastage in Irrigation has been accepted for review.",
    time: "1 hour ago",
    icon: CheckCircle,
  },
  {
    text: "New challenge assigned: Renewable Energy Solutions for Rural Areas.",
    time: "3 hours ago",
    icon: UsersRound,
  },
  {
    text: "Deadline reminder: Submit progress report for 2 ongoing projects.",
    time: "1 day ago",
    icon: CalendarDays,
  },
];

export default function Notifications() {
  return (
    <section className="p-[27px]">
      <h1 className="text-[24px] font-bold text-[#131B3C]">
        Notifications
      </h1>

      <p className="text-xs text-[#70778A] mt-1.5">
        Stay updated with university activities and project events.
      </p>

      <div className="mt-6 bg-white border border-[#E7E8EF] rounded-xl">
        {notifications.map((notification) => {
          const Icon = notification.icon;

          return (
            <div
              key={notification.text}
              className="p-5 flex items-start border-b last:border-b-0"
            >
              <div className="w-10 h-10 rounded-full bg-[#F1EDFF] text-[#6938C8] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>

              <div className="ml-4">
                <p className="text-xs leading-6 text-[#384056]">
                  {notification.text}
                </p>

                <span className="text-[10px] text-gray-400">
                  {notification.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}