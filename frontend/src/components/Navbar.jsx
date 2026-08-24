import {
  Menu,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

function Navbar({ setIsOpen }) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm sm:px-6 lg:ml-64 lg:px-8">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Mobile menu */}
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
        >
          <Menu size={24} />
        </button>

        {/* Search */}
        <div className="relative hidden sm:block">
          <Search
            size={19}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-56 rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Notification */}
        <button className="relative rounded-xl p-2.5 text-slate-600 transition hover:bg-slate-100">
          <Bell size={21} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-slate-100">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            A
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-slate-800">
              Aniket
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>

          <ChevronDown
            size={17}
            className="hidden text-slate-400 sm:block"
          />
        </button>

      </div>
    </header>
  );
}

export default Navbar;