import { Helmet } from "react-helmet-async";
import {
  Mail,
  Lock,
  Eye,
  Github,
  Chrome,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login | Learn By Hariom</title>
      </Helmet>

      <section className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 px-4">

        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">

          <div className="text-center">

            <h1 className="text-4xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Login to continue your learning journey with
              <strong> Learn By Hariom</strong>.
            </p>

          </div>

          <form className="mt-8 space-y-5">

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-slate-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border py-3 pl-11 pr-11 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <Eye className="absolute right-3 top-3 cursor-pointer text-slate-400" />
            </div>

            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>

              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            <button
              className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Login
            </button>

          </form>

          <div className="my-6 flex items-center gap-4">
            <hr className="flex-1" />
            <span className="text-slate-500">OR</span>
            <hr className="flex-1" />
          </div>

          <div className="space-y-3">

            <button
              className="flex w-full items-center justify-center gap-3 rounded-lg border py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Chrome />
              Continue with Google
            </button>

            <button
              className="flex w-full items-center justify-center gap-3 rounded-lg border py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Github />
              Continue with GitHub
            </button>

          </div>

          <p className="mt-8 text-center text-slate-600 dark:text-slate-300">

            Don't have an account?

            <Link
              to="/register"
              className="ml-2 font-semibold text-blue-600 hover:underline"
            >
              Create Account
            </Link>

          </p>

        </div>

      </section>
    </>
  );
}