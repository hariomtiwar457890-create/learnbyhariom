import { Helmet } from "react-helmet-async";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

      <Helmet>
        <title>Contact | Learn By Hariom</title>
      </Helmet>

      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Contact Me
        </h1>

        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Have a project, collaboration, or any questions?
          <br />
          I'd love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        {/* CONTACT INFO */}
        <div className="rounded-2xl border bg-white p-8 shadow-lg dark:bg-slate-900">

          <h2 className="mb-6 text-2xl font-bold">
            Contact Information
          </h2>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <a href="mailto:tiwarihariom211@gmail.com">
                tiwarihariom211@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-green-600" />
              <div>
                <a href="tel:+916206152782">+91 6206152782</a>
                <br />
                <a href="tel:+917859031017">+91 7859031017</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-red-600" />
              <span>Durgapur, Bihar, India</span>
            </div>

          </div>

          <hr className="my-8" />

          <h3 className="mb-4 text-xl font-semibold">
            Connect with Me
          </h3>

          <div className="flex flex-wrap gap-4">

            <a href="https://github.com/hariomtiwar457890-create/learnbyhariom" target="_blank" rel="noreferrer">
              <Github />
            </a>

            <a href="https://www.linkedin.com/in/hariom-tiwari-913a8537a" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>

            <a href="https://www.instagram.com/hariomtiwari" target="_blank" rel="noreferrer">
              <Instagram />
            </a>

            <a href="https://youtube.com/@hariomcodding" target="_blank" rel="noreferrer">
              <Youtube />
            </a>

            <a href="https://t.me/Diler_brhaman" target="_blank" rel="noreferrer">
              <Send />
            </a>

          </div>

        </div>

        {/* FORM */}
        <div className="rounded-2xl border bg-white p-8 shadow-lg dark:bg-slate-900">

          <h2 className="mb-6 text-2xl font-bold">
            Send Me a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* ✅ FIXED HERE */}
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}