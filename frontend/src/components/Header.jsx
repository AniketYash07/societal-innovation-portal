import {
  Menu,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
   <header
      className="
        fixed
        top-0
        right-0
        z-50
        h-[78px]
        w-[calc(100%-256px)]
        bg-white
        border-b
        border-slate-200
        flex
        items-center
        px-7
      "
    >
      {/* Menu */}
      <button
        type="button"
        aria-label="Menu"
        className="
          w-[42px] h-[42px]
          flex items-center justify-center
          shrink-0
          mr-[22px]
          text-slate-600
          hover:bg-slate-100
          rounded-lg
          transition
        "
      >
        <Menu size={25} />
      </button>

      {/* Search */}
      <div
        className="
          w-[430px]
          h-[42px]
          flex items-center
          shrink-0
          bg-slate-50
          border border-slate-200
          rounded-[9px]
          px-4
        "
      >
        <input
          type="text"
          placeholder="Search challenges, projects, announcements..."
          className="
            flex-1
            w-full
            bg-transparent
            border-none
            outline-none
            text-sm
            text-slate-700
            placeholder:text-slate-400
          "
        />

        <Search
          size={21}
          className="shrink-0 text-slate-500"
        />
      </div>

      {/* Flexible Space */}
      <div className="flex-1" />

      {/* Notification */}
      <button
        type="button"
        aria-label="Notifications"
        className="
          relative
          w-[42px] h-[42px]
          flex items-center justify-center
          shrink-0
          mr-[22px]
          text-slate-600
          hover:bg-slate-100
          rounded-lg
          transition
        "
      >
        <Bell size={23} strokeWidth={1.8} />

        <span
          className="
            absolute
            top-[3px]
            right-[3px]
            min-w-[17px]
            h-[17px]
            px-1
            flex items-center justify-center
            rounded-full
            bg-red-500
            text-white
            text-[10px]
            font-semibold
          "
        >
          5
        </span>
      </button>

      {/* Profile */}
      <div
        className="
          flex items-center
          gap-[11px]
          shrink-0
          min-w-[245px]
          cursor-pointer
        "
      >
        {/* Profile Image */}
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Dr. Priya Sharma"
          className="
            w-[42px]
            h-[42px]
            shrink-0
            object-cover
            rounded-full
            border-2
            border-slate-200
          "
        />

        {/* Profile Details */}
        <div className="flex flex-col min-w-0 leading-tight">

          <div className="text-[13px] font-semibold text-slate-800 whitespace-nowrap">
            Dr. Priya Sharma
          </div>

          <div className="mt-[2px] text-[11px] text-slate-500 whitespace-nowrap">
            University Coordinator
          </div>

          <div className="mt-[1px] text-[10px] text-slate-400 whitespace-nowrap">
            BIT Sindri
          </div>

        </div>

        {/* Dropdown */}
        <ChevronDown
          size={17}
          className="shrink-0 ml-1 text-slate-500"
        />
      </div>

    </header>
  );
}