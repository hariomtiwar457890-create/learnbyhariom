import { Helmet } from 'react-helmet-async';

export default function ForgotPassword() {
  return (
    <section className="mx-auto flex max-w-2xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <Helmet><title>Learn By Hariom | Forgot Password</title></Helmet>
      <div className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold">Reset password</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">We’ll send you a secure reset link to your email.</p>
      </div>
    </section>
  );
}
