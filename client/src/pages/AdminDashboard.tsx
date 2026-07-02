import { Helmet } from 'react-helmet-async';

export default function AdminDashboard() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Helmet><title>Learn By Hariom | Admin Dashboard</title></Helmet>
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">Manage users, content, analytics, and platform settings from one place.</p>
    </section>
  );
}
