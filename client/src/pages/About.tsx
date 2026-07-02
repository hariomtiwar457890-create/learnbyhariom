import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Helmet><title>Learn By Hariom | About</title></Helmet>
      <h1 className="text-3xl font-semibold">About Learn By Hariom</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">This platform combines hands-on learning, modern engineering, and thoughtful design to help learners master real-world skills.</p>
    </section>
  );
}
