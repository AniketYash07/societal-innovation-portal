import { CircleHelp, Mail, MessageSquare, Phone } from "lucide-react";

export default function Help() {
  return (
    <section className="p-[27px]">
      <h1 className="text-[24px] font-bold text-[#131B3C]">
        Help & Support
      </h1>

      <p className="text-xs text-[#70778A] mt-1.5">
        Get help with the Societal Innovation Collaboration Portal.
      </p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <SupportCard
          icon={CircleHelp}
          title="Help Center"
          text="Browse frequently asked questions and guides."
        />

        <SupportCard
          icon={Mail}
          title="Email Support"
          text="Send a message to our support team."
        />

        <SupportCard
          icon={MessageSquare}
          title="Live Support"
          text="Contact the support team for assistance."
        />
      </div>

      <div className="mt-5 bg-[#FAF8FF] border border-[#E9E2FF] rounded-xl p-6">
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-[#6938C8]" />

          <div>
            <h2 className="text-sm font-bold">
              Need immediate assistance?
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Our support team is available to help your university.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportCard({ icon: Icon, title, text }) {
  return (
    <button className="text-left bg-white border border-[#E7E8EF] rounded-xl p-6 hover:border-[#6938C8] transition">
      <Icon className="w-7 h-7 text-[#6938C8]" />

      <h2 className="text-sm font-bold mt-4">
        {title}
      </h2>

      <p className="text-xs text-gray-500 mt-2 leading-5">
        {text}
      </p>
    </button>
  );
}