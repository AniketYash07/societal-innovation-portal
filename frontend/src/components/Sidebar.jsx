import { NavLink } from "react-router-dom";

import {
  Landmark,
  Target,
  UsersRound,
  FolderKanban,
  ClipboardCheck,
  UserRoundPlus,
  BarChart3,
  ChartNoAxesCombined,
  MessageSquare,
  Bell,
  User,
  CircleHelp,
  Headset,
} from "lucide-react";

/* 
   NAVIGATION
 */
  const navigation = [
  {
    name: "University Dashboard",
    path: "/",
    icon: Landmark,
  },
  {
    name: "Assigned Challenges",
    path: "/challenges",
    icon: Target,
  },
  {
    name: "My Students",
    path: "/students",
    icon: UsersRound,
  },
  {
    name: "Projects & Solutions",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    name: "Submissions",
    path: "/submissions",
    icon: ClipboardCheck,
  },
  {
    name: "Collaboration Requests",
    path: "/collaboration",
    icon: UserRoundPlus,
  },
  {
    name: "Reports & Analytics",
    path: "/reports",
    icon: BarChart3,
  },
  {
    name: "Impact Tracking",
    path: "/impact",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: MessageSquare,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    name: "Help & Support",
    path: "/help",
    icon: CircleHelp,
  },
];

/* 
   SIDEBAR
*/

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* 
          LOGO
      */}

      <div className="sidebar-logo">

        {/* Logo Symbol */}
        <div className="logo-symbol">
          <svg
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Societal Innovation Logo"
          >
            {/* Top Node */}
            <circle
              cx="25"
              cy="9"
              r="4.5"
              stroke="#16849B"
              strokeWidth="2"
            />

            {/* Left Node */}
            <circle
              cx="10"
              cy="34"
              r="4.5"
              stroke="#6938C8"
              strokeWidth="2"
            />

            {/* Right Node */}
            <circle
              cx="40"
              cy="34"
              r="4.5"
              stroke="#3D9B50"
              strokeWidth="2"
            />

            {/* Center Node */}
            <circle
              cx="25"
              cy="28"
              r="5"
              stroke="#2E8F6A"
              strokeWidth="2"
            />

            {/* Top Connections */}
            <path
              d="M22 12L18 18L22 23"
              stroke="#16849B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M28 12L32 18L28 23"
              stroke="#16849B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Bottom Connections */}
            <path
              d="M14 32L20 28"
              stroke="#6938C8"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M36 32L30 28"
              stroke="#3D9B50"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Logo Text */}
        <div className="logo-text">
          <div className="logo-title">
            Societal Innovation
          </div>

          <div className="logo-subtitle">
            Collaboration Portal
          </div>

          <div className="logo-government">
            Government of Jharkhand
          </div>
        </div>
      </div>

      {/* 
          SIDEBAR CONTENT
       */}

      <div className="sidebar-scroll">

        {/* Navigation */}
        <nav className="sidebar-nav">

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
              >
                <Icon
                  size={19}
                  strokeWidth={1.8}
                />

                <span>
                  {item.name}
                </span>
              </NavLink>
            );
          })}

        </nav>

        {/* 
            SUPPORT CARD
         */}

        <div className="support-card">

          <Headset
            size={34}
            strokeWidth={1.7}
            className="support-icon"
          />

          <h3>
            Need Help?
          </h3>

          <p>
            Our support team is here
            <br />
            to help your university.
          </p>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/help";
            }}
          >
            Contact Support
          </button>

        </div>

      </div>
    </aside>
  );
}