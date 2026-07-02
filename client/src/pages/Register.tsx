import { Helmet } from "react-helmet-async";
import {
  User,
  Mail,
  Phone,
  Lock,
  Github,
  Chrome,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Create Account | Learn By Hariom</title>
      </Helmet>

      <section className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 px-4 py-10">

        <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">

          <div className="text-center">

            <h1 className="text-4xl font-bold">
              Join Learn By Hariom 🚀
            </h1>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Create your account and start learning with practical courses,
              projects, roadmaps, and AI-powered resources.
            </p>

          </div>

          <form className="mt-8 space-y-5">

            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-slate-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 text-slate-400" />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-lg border py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full rounded-lg border py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <label className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
              <input type="checkbox" className="mt-1" />
              <span>
                I agree to the <strong>Terms & Conditions</strong> and
                <strong> Privacy Policy</strong>.
              </span>
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Create Account
            </button>

          </form>

          <div className="my-6 flex items-center gap-4">
            <hr className="flex-1" />
            <span className="text-slate-500">OR</span>
            <hr className="flex-1" />
          </div>

          <div className="space-y-3">

            <button className="flex w-full items-center justify-center gap-3 rounded-lg border py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800">
              <Chrome />
              Continue with Google
            </button>

            <button className="flex w-full items-center justify-center gap-3 rounded-lg border py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800">
              <Github />
              Continue with GitHub
            </button>

          </div>

          <p className="mt-8 text-center text-slate-600 dark:text-slate-300">
            Already have an account?

            <Link
              to="/login"
              className="ml-2 font-semibold text-blue-600 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </section>
    </>
  );
}