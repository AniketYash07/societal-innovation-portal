import { MessageSquare } from "lucide-react";

const messages = [
  {
    name: "Project Review Team",
    message: "Your project submission has been reviewed.",
    time: "10 min ago",
  },
  {
    name: "IIT Dhanbad",
    message: "We would like to collaborate on the water project.",
    time: "2 hours ago",
  },
  {
    name: "University Coordinator",
    message: "Please submit the monthly progress report.",
    time: "Yesterday",
  },
];

export default function Messages() {
  return (
    <section className="p-[27px]">
      <h1 className="text-[24px] font-bold text-[#131B3C]">
        Messages
      </h1>

      <p className="text-xs text-[#70778A] mt-1.5">
        Communicate with students, universities and project teams.
      </p>

      <div className="mt-6 bg-white border border-[#E7E8EF] rounded-xl overflow-hidden">
        {messages.map((message) => (
          <button
            key={message.name}
            className="w-full text-left p-5 flex items-center border-b last:border-b-0 hover:bg-[#FCFBFF]"
          >
            <div className="w-11 h-11 rounded-full bg-[#F1EDFF] text-[#6938C8] flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>

            <div className="ml-4 flex-1">
              <h3 className="text-sm font-bold">
                {message.name}
              </h3>

              <p className="text-[11px] text-gray-500 mt-1">
                {message.message}
              </p>
            </div>

            <span className="text-[10px] text-gray-400">
              {message.time}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}