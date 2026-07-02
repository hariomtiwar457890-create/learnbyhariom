import { Helmet } from "react-helmet-async";
import {
  Users,
  BookOpen,
  FileText,
  FolderGit2,
  BarChart3,
  Settings,
} from "lucide-react";

const dashboardCards = [
  {
    title: "Total Users",
    value: "1,250+",
    icon: <Users className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Courses",
    value: "25",
    icon: <BookOpen className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Blogs",
    value: "48",
    icon: <FileText className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "Projects",
    value: "30",
    icon: <FolderGit2 className="h-8 w-8 text-purple-600" />,
  },
];

const quickActions = [
  "➕ Add New Course",
  "📝 Write Blog",
  "📂 Upload Project",
  "👥 Manage Users",
  "📊 View Analytics",
  "⚙️ Website Settings",
];

export default function AdminDashboard() {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Learn By Hariom</title>
      </Helmet>

      <section className="mx-auto max-w-7xl px-4 py-12">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Welcome, Hariom 👋
          </h1>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Manage your Learn By Hariom platform from one place.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {dashboardCards.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900"
            >
              {item.icon}

              <h2 className="mt-4 text-xl font-semibold">
                {item.title}
              </h2>

              <p className="mt-2 text-3xl font-bold text-blue-600">
                {item.value}
              </p>
            </div>
          ))}

        </div>

        {/* Quick Actions */}
        <div className="mt-12 rounded-2xl border bg-white p-8 shadow dark:bg-slate-900">
          <h2 className="mb-6 text-2xl font-bold">
            Quick Actions
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {quickActions.map((action) => (
              <button
                key={action}
                className="rounded-lg border p-4 text-left transition hover:bg-blue-600 hover:text-white"
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        {/* Analytics */}
        <div className="mt-12 rounded-2xl border bg-white p-8 shadow dark:bg-slate-900">
          <div className="mb-6 flex items-center gap-3">
            <BarChart3 className="text-blue-600" />
            <h2 className="text-2xl font-bold">
              Platform Overview
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-slate-100 p-6 dark:bg-slate-800">
              <p>Total Visitors</p>
              <h3 className="mt-2 text-3xl font-bold">12,500+</h3>
            </div>

            <div className="rounded-xl bg-slate-100 p-6 dark:bg-slate-800">
              <p>Registered Students</p>
              <h3 className="mt-2 text-3xl font-bold">1,250+</h3>
            </div>

            <div className="rounded-xl bg-slate-100 p-6 dark:bg-slate-800">
              <p>Published Blogs</p>
              <h3 className="mt-2 text-3xl font-bold">48</h3>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="mt-12 rounded-2xl border bg-white p-8 shadow dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <Settings className="text-blue-600" />
            <h2 className="text-2xl font-bold">
              Settings
            </h2>
          </div>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Manage website settings, themes, users, security, and platform configuration from here.
          </p>
        </div>

      </section>
    </>
  );
}