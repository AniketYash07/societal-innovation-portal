import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
  Puzzle,
  X,
} from "lucide-react";

function Challenges() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priority, setPriority] = useState("All");

  const challenges = [
    {
      id: 1,
      title: "Smart Water Management System",
      description:
        "Develop an intelligent system to monitor water availability, usage, and wastage in rural communities.",
      category: "Water Resources",
      location: "Ranchi",
      priority: "High",
      status: "Needs Review",
      submitted: "2 days ago",
      aiMatch: "94%",
    },
    {
      id: 2,
      title: "Digital Healthcare Access",
      description:
        "Create a technology-enabled solution to improve healthcare accessibility for rural and remote communities.",
      category: "Healthcare",
      location: "Dumka",
      priority: "High",
      status: "Assigned",
      submitted: "4 days ago",
      aiMatch: "91%",
    },
    {
      id: 3,
      title: "Smart Agriculture Monitoring",
      description:
        "Build a solution that helps farmers monitor crop health, soil conditions, and irrigation requirements.",
      category: "Agriculture",
      location: "Hazaribagh",
      priority: "Medium",
      status: "In Progress",
      submitted: "1 week ago",
      aiMatch: "88%",
    },
    {
      id: 4,
      title: "Rural Education Platform",
      description:
        "Develop a digital platform to improve access to quality educational resources for rural students.",
      category: "Education",
      location: "Deoghar",
      priority: "Medium",
      status: "Needs Review",
      submitted: "1 week ago",
      aiMatch: "86%",
    },
    {
      id: 5,
      title: "Waste Management & Recycling",
      description:
        "Develop an efficient waste collection, segregation, and recycling solution for growing communities.",
      category: "Environment",
      location: "Jamshedpur",
      priority: "Low",
      status: "Assigned",
      submitted: "2 weeks ago",
      aiMatch: "82%",
    },
    {
      id: 6,
      title: "Rural Livelihood Support",
      description:
        "Create a platform that connects rural workers and local entrepreneurs with opportunities and resources.",
      category: "Rural Livelihoods",
      location: "Khunti",
      priority: "Medium",
      status: "Needs Review",
      submitted: "2 weeks ago",
      aiMatch: "79%",
    },
  ];

  const categories = [
    "All",
    "Agriculture",
    "Healthcare",
    "Education",
    "Water Resources",
    "Environment",
    "Rural Livelihoods",
  ];

  const priorities = ["All", "High", "Medium", "Low"];

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesSearch =
      challenge.title.toLowerCase().includes(search.toLowerCase()) ||
      challenge.description.toLowerCase().includes(search.toLowerCase()) ||
      challenge.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || challenge.category === category;

    const matchesPriority =
      priority === "All" || challenge.priority === priority;

    return matchesSearch && matchesCategory && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-blue-600">
              University Workspace
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Challenges
            </h1>

            <p className="mt-2 max-w-2xl text-slate-500">
              Explore societal challenges and identify opportunities for
              research, innovation, and student projects.
            </p>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
            <p className="text-xs font-medium text-blue-600">
              Available Challenges
            </p>

            <p className="mt-1 text-2xl font-bold text-blue-700">
              {filteredChallenges.length}
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-3 lg:flex-row">

          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search challenges, locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X size={17} />
              </button>
            )}
          </div>

          {/* Category */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-sm font-medium text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 lg:w-52"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <SlidersHorizontal
              size={17}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>

          {/* Priority */}
          <div>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 lg:w-40"
            >
              {priorities.map((item) => (
                <option key={item}>{item} Priority</option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Challenge count */}
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-800">
            {filteredChallenges.length}
          </span>{" "}
          challenges
        </p>

        <button
          onClick={() => {
            setSearch("");
            setCategory("All");
            setPriority("All");
          }}
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Reset filters
        </button>
      </div>

      {/* Challenge Grid */}
      {filteredChallenges.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

          {filteredChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              {/* Top */}
              <div className="flex items-start justify-between gap-4">

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Puzzle size={21} />
                  </div>

                  <div>
                    <h2 className="font-bold leading-snug text-slate-900">
                      {challenge.title}
                    </h2>

                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {challenge.category}
                    </p>
                  </div>
                </div>

                {/* Priority */}
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                    challenge.priority === "High"
                      ? "bg-red-50 text-red-600"
                      : challenge.priority === "Medium"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {challenge.priority}
                </span>

              </div>

              {/* Description */}
              <p className="mt-5 line-clamp-2 text-sm leading-6 text-slate-500">
                {challenge.description}
              </p>

              {/* AI Match */}
              <div className="mt-5 rounded-xl border border-purple-100 bg-purple-50 p-4">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <Sparkles size={17} className="text-purple-600" />

                    <span className="text-sm font-semibold text-purple-800">
                      AI University Match
                    </span>
                  </div>

                  <span className="text-sm font-bold text-purple-700">
                    {challenge.aiMatch}
                  </span>

                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-purple-100">
                  <div
                    className="h-full rounded-full bg-purple-500"
                    style={{ width: challenge.aiMatch }}
                  />
                </div>

                <p className="mt-2 text-xs text-purple-600">
                  Based on university expertise and research capabilities
                </p>

              </div>

              {/* Meta */}
              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">

                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {challenge.location}
                </span>

                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  {challenge.submitted}
                </span>

              </div>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  {challenge.status}
                </span>

                <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600">
                  View Challenge
                  <ArrowUpRight size={16} />
                </button>

              </div>

            </div>
          ))}

        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <Search size={25} />
          </div>

          <h2 className="mt-4 text-lg font-bold text-slate-900">
            No challenges found
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Try changing your search or filters to find more societal
            challenges.
          </p>

          <button
            onClick={() => {
              setSearch("");
              setCategory("All");
              setPriority("All");
            }}
            className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Clear Filters
          </button>

        </div>
      )}
    </div>
  );
}

export default Challenges;