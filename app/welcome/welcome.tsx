import Navbar from "components/Navbar";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-black flex flex-col items-center">
      <Navbar />

      <section className="w-full max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
        {/* Image */}
        <img
          src="/doctors.gif"
          alt="Illustration of doctors"
          className="w-56 sm:w-72 md:w-96 h-auto object-contain animate-fade-in"
          loading="eager"
        />

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 bg-clip-text text-transparent">
            Revolutionizing healthcare
          </span>{" "}
          through intelligent digital solutions
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Go paperless with digital appointments, smart prescriptions, and secure
          records — powered by Health AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href="/book"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium shadow hover:scale-[1.02] transform transition"
          >
            Book Appointment
          </a>

          <a
            href="/doctors"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-transparent font-medium hover:bg-slate-100 transition"
          >
            For Doctors
          </a>
        </div>

        {/* Features */}
        <div className="mt-4 flex flex-wrap justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
          <span>📅 Digital Appointments</span>
          <span>💊 Smart Prescriptions</span>
          <span>🩺 AI Health Insights</span>
        </div>
      </section>

      {/* Small Animation Style */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeInUp 800ms ease both;
        }
      `}</style>
    </main>
  );
}

export default Welcome;
