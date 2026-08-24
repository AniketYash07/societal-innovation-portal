import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="min-h-screen lg:ml-64">

        {/* Header */}
        <Header />

        {/* Page */}
        <main className="min-h-[calc(100vh-78px)] pt-[100px]">
          <Outlet />
        </main>

      </div>
    </div>
  );
}