import { Helmet } from 'react-helmet-async';

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Helmet><title>Learn By Hariom | Testimonials</title></Helmet>
      <h1 className="text-3xl font-semibold">Testimonials</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">Stories from learners and collaborators who grew with the platform.</p>
    </section>
  );
}
