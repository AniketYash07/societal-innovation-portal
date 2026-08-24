import { User, Mail, Building2, MapPin } from "lucide-react";

export default function Profile() {
  return (
    <section className="p-[27px]">
      <h1 className="text-[24px] font-bold text-[#131B3C]">
        Profile
      </h1>

      <p className="text-xs text-[#70778A] mt-1.5">
        Manage your university coordinator profile.
      </p>

      <div className="mt-6 bg-white border border-[#E7E8EF] rounded-xl p-7 max-w-3xl">
        <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Dr. Priya Sharma"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div className="ml-5">
            <h2 className="text-lg font-bold">
              Dr. Priya Sharma
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              University Coordinator
            </p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-5">
          <Info icon={User} label="Full Name" value="Dr. Priya Sharma" />
          <Info icon={Mail} label="Email" value="priya@bitsindri.ac.in" />
          <Info icon={Building2} label="University" value="BIT Sindri" />
          <Info icon={MapPin} label="Location" value="Dhanbad, Jharkhand" />
        </div>

        <button className="mt-7 bg-[#6938C8] text-white rounded-lg px-5 py-3 text-xs font-semibold">
          Edit Profile
        </button>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center gap-2 text-[#6938C8]">
        <Icon className="w-4 h-4" />
        <span className="text-[10px]">{label}</span>
      </div>

      <div className="text-sm font-semibold mt-2">
        {value}
      </div>
    </div>
  );
}