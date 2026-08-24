import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import AssignedChallenges from "./pages/AssignedChallenges";

/* =========================================================
   PLACEHOLDER PAGE
========================================================= */

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            {title}
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            This page is ready for your content.
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =================================================
            MAIN LAYOUT
        ================================================= */}

        <Route element={<Layout />}>

          {/* Dashboard */}
          <Route
            path="/"
            element={<Dashboard />}
          />
         <Route
          path="/university"
         element={<Dashboard />}
         />

          {/* University */}
          <Route
            path="/university"
            element={
              <PlaceholderPage title="University Dashboard" />
            }
          />

          {/* Assigned Challenges */}
          <Route
            path="/challenges"
            element={<AssignedChallenges />}
          />

          {/* My Students */}
          <Route
            path="/students"
            element={
              <PlaceholderPage title="My Students" />
            }
          />

          {/* Projects */}
          <Route
            path="/projects"
            element={
              <PlaceholderPage title="Projects & Solutions" />
            }
          />

          {/* Submissions */}
          <Route
            path="/submissions"
            element={
              <PlaceholderPage title="Submissions" />
            }
          />

          {/* Collaboration */}
          <Route
            path="/collaboration"
            element={
              <PlaceholderPage title="Collaboration Requests" />
            }
          />

          {/* Reports */}
          <Route
            path="/reports"
            element={
              <PlaceholderPage title="Reports & Analytics" />
            }
          />

          {/* Impact */}
          <Route
            path="/impact"
            element={
              <PlaceholderPage title="Impact Tracking" />
            }
          />

          {/* Messages */}
          <Route
            path="/messages"
            element={
              <PlaceholderPage title="Messages" />
            }
          />

          {/* Notifications */}
          <Route
            path="/notifications"
            element={
              <PlaceholderPage title="Notifications" />
            }
          />

          {/* Profile */}
          <Route
            path="/profile"
            element={
              <PlaceholderPage title="Profile" />
            }
          />

          {/* Help */}
          <Route
            path="/help"
            element={
              <PlaceholderPage title="Help & Support" />
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}