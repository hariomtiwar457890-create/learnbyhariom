import { Helmet } from 'react-helmet-async';

export default function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Helmet><title>Learn By Hariom | Skills</title></Helmet>
      <h1 className="text-3xl font-semibold">Skills</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">Master modern web development, design, and deployment workflows.</p>
    </section>
  );
}
