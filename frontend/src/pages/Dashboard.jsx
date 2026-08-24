import {
  Plus,
  FileText,
  Hourglass,
  UsersRound,
  CircleCheckBig,
  CircleCheck,
  MapPin,
  CalendarDays,
  MoreVertical,
  Settings,
  Users,
  ChevronRight,
  ArrowRight,
  CircleDot,
  Leaf,
  BookOpen,
  Rocket,
  Trophy,
} from "lucide-react";

const stats = [
  {
    number: "12",
    title: "Assigned Challenges",
    subtitle: "Across Departments",
    icon: FileText,
    color: "green",
  },
  {
    number: "8",
    title: "In Progress",
    subtitle: "Active Projects",
    icon: Hourglass,
    color: "blue",
  },
  {
    number: "5",
    title: "Student Teams",
    subtitle: "Working on Solutions",
    icon: UsersRound,
    color: "purple",
  },
  {
    number: "3",
    title: "Solutions Submitted",
    subtitle: "Awaiting Review",
    icon: CircleCheckBig,
    color: "orange",
  },
  {
    number: "2",
    title: "Completed Projects",
    subtitle: "This Month",
    icon: CircleCheck,
    color: "green",
  },
];

const challenges = [
  {
    image:
      "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=500&q=80",
    category: "Water Management",
    categoryColor: "blue",
    title: "Water Wastage in Irrigation in Several Villages",
    location: "Dhanbad, Jharkhand",
    department: "Agriculture & Water",
    description:
      "Farmers in our area are wasting a large amount of water during irrigation due to outdated methods and lack of proper guidance.",
    date: "Assigned on 20 May 2025",
    status: "In Progress",
    statusColor: "blue",
    team: "Team: 5 Students",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=500&q=80",
    category: "Environment",
    categoryColor: "green",
    title: "Improper Waste Management in Urban Areas",
    location: "Ranchi, Jharkhand",
    department: "Environment",
    description:
      "Waste is not collected regularly, causing pollution, bad smell and diseases in our locality.",
    date: "Assigned on 18 May 2025",
    status: "Assigned",
    statusColor: "green",
    team: "Team: 4 Students",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80",
    category: "Education",
    categoryColor: "purple",
    title: "Lack of Digital Learning Facilities in Rural Schools",
    location: "Hazaribagh, Jharkhand",
    department: "Education",
    description:
      "Students in rural schools don't have access to digital content and smart classrooms.",
    date: "Assigned on 15 May 2025",
    status: "In Progress",
    statusColor: "blue",
    team: "Team: 6 Students",
  },
];

const projects = [
  {
    icon: CircleDot,
    iconColor: "purple",
    title: "Smart Waste Collection System",
    team: "Team: 5 Students",
    progress: 70,
    date: "Expected: 15 Jun 2025",
  },
  {
    icon: Leaf,
    iconColor: "green",
    title: "Eco-friendly Irrigation Solution",
    team: "Team: 4 Students",
    progress: 45,
    date: "Expected: 20 Jun 2025",
  },
  {
    icon: BookOpen,
    iconColor: "orange",
    title: "Digital Classroom Platform",
    team: "Team: 6 Students",
    progress: 80,
    date: "Expected: 10 Jun 2025",
  },
];

const departments = [
  ["1", "Computer Science Engineering", "6 Projects"],
  ["2", "Electronics & Communication", "4 Projects"],
  ["3", "Civil Engineering", "3 Projects"],
  ["4", "Mechanical Engineering", "2 Projects"],
];

const colorStyles = {
  green: {
    icon: "bg-green-50 text-green-600",
    text: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  blue: {
    icon: "bg-blue-50 text-blue-600",
    text: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  purple: {
    icon: "bg-purple-50 text-purple-600",
    text: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600",
    text: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 px-4py-6 sm:px-6 lg:px-8">
      {/* ================= PAGE HEADING ================= */}
      <div className="mx-auto mb-6 max-w-[1600px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              University Dashboard <span>🎓</span>
            </h1>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
              Welcome back, Dr. Priya! Here's an overview of challenges and
              activities at your university.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 active:scale-[0.98]"
          >
            <Plus size={16} />
            Browse Challenges
          </button>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_350px]">
        {/* ================= LEFT ================= */}
        <div className="min-w-0">
          {/* ================= STATS ================= */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
            {stats.map((stat) => {
              const Icon = stat.icon;
              const style = colorStyles[stat.color];

              return (
                <div
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  key={stat.title}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${style.icon}`}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0">
                    <div className="text-2xl font-bold text-slate-900">
                      {stat.number}
                    </div>

                    <div className="truncate text-sm font-semibold text-slate-800">
                      {stat.title}
                    </div>

                    <div className="mt-0.5 text-xs text-slate-500">
                      {stat.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= CHALLENGES ================= */}
          <section className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-base font-bold text-slate-900">
                Recently Assigned Challenges
              </h2>

              <select
                defaultValue="latest"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              >
                <option value="latest">Sort by: Latest</option>
                <option value="oldest">Sort by: Oldest</option>
              </select>
            </div>

            <div>
              {challenges.map((challenge) => (
                <ChallengeCard
                  key={challenge.title}
                  challenge={challenge}
                />
              ))}
            </div>

            <div className="border-t border-slate-100 px-5 py-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 transition hover:text-green-700"
              >
                View All Assigned Challenges
                <ArrowRight size={14} />
              </button>
            </div>
          </section>

          {/* ================= PROJECTS ================= */}
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h2 className="text-base font-bold text-slate-900">
                Ongoing Projects Overview
              </h2>

              <button
                type="button"
                className="text-xs font-semibold text-green-600 transition hover:text-green-700"
              >
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => {
                const Icon = project.icon;
                const style = colorStyles[project.iconColor];

                return (
                  <div
                    className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition hover:border-slate-300 hover:bg-white hover:shadow-sm"
                    key={project.title}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${style.icon}`}
                      >
                        <Icon size={16} />
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm font-semibold leading-5 text-slate-800">
                          {project.title}
                        </div>

                        <div className="mt-1 text-xs text-slate-500">
                          {project.team}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                        <div
                          className={`h-full rounded-full ${getProgressColor(
                            project.iconColor
                          )}`}
                          style={{
                            width: `${project.progress}%`,
                          }}
                        />
                      </div>

                      <span className="text-xs font-semibold text-slate-600">
                        {project.progress}%
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
                      <CalendarDays size={12} />
                      {project.date}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* ================= RIGHT ================= */}
        <aside className="space-y-6">
          {/* ================= IMPACT ================= */}
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <RightCardHeader
              title="University Impact Summary"
              button="View All"
            />

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-b-xl bg-slate-100">
              <ImpactBox
                icon={UsersRound}
                number="245+"
                label="Students Involved"
                color="green"
              />

              <ImpactBox
                icon={MapPin}
                number="24"
                label="Challenges Worked On"
                color="orange"
              />

              <ImpactBox
                icon={Rocket}
                number="12"
                label="Solutions Developed"
                color="blue"
              />

              <ImpactBox
                icon={Trophy}
                number="2"
                label="Projects Completed"
                color="purple"
              />
            </div>
          </section>

          {/* ================= DEPARTMENTS ================= */}
          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <RightCardHeader
              title="Top Performing Departments"
              button="View All"
            />

            <div className="divide-y divide-slate-100">
              {departments.map(([number, name, projects]) => (
                <div
                  className="flex items-center gap-3 px-5 py-3.5 transition hover:bg-slate-50"
                  key={number}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                    {number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium text-slate-800">
                      {name}
                    </div>
                  </div>

                  <div className="shrink-0 text-xs font-medium text-slate-500">
                    {projects}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================= NOTIFICATIONS ================= */}
          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <RightCardHeader
              title="Recent Notifications"
              button="View All"
            />

            <div className="divide-y divide-slate-100">
              <NotificationItem
                icon={CircleCheck}
                color="green"
                text={
                  <>
                    Your solution for{" "}
                    <strong className="font-semibold text-slate-800">
                      'Water Wastage in Irrigation'
                    </strong>{" "}
                    has been accepted for review.
                  </>
                }
                time="1 hour ago"
              />

              <NotificationItem
                icon={UsersRound}
                color="purple"
                text={
                  <>
                    New challenge assigned:{" "}
                    <strong className="font-semibold text-slate-800">
                      'Renewable Energy Solutions for Rural Areas.'
                    </strong>
                  </>
                }
                time="3 hours ago"
              />

              <NotificationItem
                icon={CalendarDays}
                color="orange"
                text={
                  <>
                    Deadline reminder: Submit progress report for 2 ongoing
                    projects.
                  </>
                }
                time="1 day ago"
              />
            </div>

            <div className="border-t border-slate-100 px-5 py-4">
              <button
                className="inline-flex items-center gap-2 text-xs font-semibold text-green-600 transition hover:text-green-700"
                type="button"
              >
                See all notifications
                <ArrowRight size={13} />
              </button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

/* =========================================================
   CHALLENGE CARD
========================================================= */

function ChallengeCard({ challenge }) {
  const categoryStyle = colorStyles[challenge.categoryColor];
  const statusStyle = colorStyles[challenge.statusColor];

  return (
    <div className="group flex flex-col gap-4 border-b border-slate-100 p-5 last:border-b-0 lg:flex-row">
      {/* Image */}
      <div className="h-44 w-full shrink-0 overflow-hidden rounded-lg lg:h-32 lg:w-40">
        <img
          src={challenge.image}
          alt={challenge.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Main content */}
      <div className="min-w-0 flex-1">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${categoryStyle.bg} ${categoryStyle.text}`}
        >
          {challenge.category}
        </span>

        <h3 className="mt-2 text-sm font-bold leading-5 text-slate-900">
          {challenge.title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <MapPin size={13} />
            {challenge.location}
          </span>

          <span className="text-slate-300">•</span>

          <span>{challenge.department}</span>
        </div>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
          {challenge.description}
        </p>

        <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
          <CalendarDays size={13} />
          {challenge.date}
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 flex-row items-center justify-between gap-3 lg:w-36 lg:flex-col lg:items-end lg:justify-start">
        <button
          className="rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          type="button"
          aria-label="More options"
        >
          <MoreVertical size={17} />
        </button>

        <div className="flex flex-col items-end gap-1.5">
          <div
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyle.bg} ${statusStyle.text}`}
          >
            {challenge.statusColor === "blue" ? (
              <Settings size={13} />
            ) : (
              <Users size={13} />
            )}

            {challenge.status}
          </div>

          <div className="text-xs text-slate-500">
            {challenge.team}
          </div>
        </div>

        <button
          className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 transition hover:text-green-700"
          type="button"
        >
          View Details
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   IMPACT BOX
========================================================= */

function ImpactBox({ icon: Icon, number, label, color }) {
  const style = colorStyles[color];

  return (
    <div className="bg-white px-4 py-5 text-center transition hover:bg-slate-50">
      <Icon className={`mx-auto ${style.text}`} size={27} />

      <div className="mt-2 text-xl font-bold text-slate-900">
        {number}
      </div>

      <div className="mt-1 text-[11px] leading-4 text-slate-500">
        {label}
      </div>
    </div>
  );
}

/* =========================================================
   NOTIFICATION
========================================================= */

function NotificationItem({
  icon: Icon,
  color,
  text,
  time,
}) {
  const style = colorStyles[color];

  return (
    <div className="flex gap-3 px-5 py-4 transition hover:bg-slate-50">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${style.icon}`}
      >
        <Icon size={16} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-xs leading-5 text-slate-600">
          {text}
        </div>

        <span className="mt-1 block text-[11px] text-slate-400">
          {time}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   RIGHT CARD HEADER
========================================================= */

function RightCardHeader({ title, button }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
      <h2 className="text-sm font-bold text-slate-900">
        {title}
      </h2>

      <button
        type="button"
        className="text-xs font-semibold text-green-600 transition hover:text-green-700"
      >
        {button}
      </button>
    </div>
  );
}

/* =========================================================
   PROGRESS BAR COLOR
========================================================= */

function getProgressColor(color) {
  switch (color) {
    case "purple":
      return "bg-purple-500";

    case "green":
      return "bg-green-500";

    case "orange":
      return "bg-orange-500";

    case "blue":
      return "bg-blue-500";

    default:
      return "bg-green-500";
  }
}