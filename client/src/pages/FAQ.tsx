import { Helmet } from 'react-helmet-async';

export default function FAQ() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Helmet><title>Learn By Hariom | FAQ</title></Helmet>
      <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">Answers to common questions about learning paths, community access, and support.</p>
    </section>
  );
}
