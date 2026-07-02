import { Helmet } from 'react-helmet-async';

export default function Profile() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Helmet><title>Learn By Hariom | Profile</title></Helmet>
      <h1 className="text-3xl font-semibold">Profile</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">Track your learning progress and personalize your experience.</p>
    </section>
  );
}
