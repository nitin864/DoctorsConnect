import React from "react";
import HeroCard from "components/HeroCard";  
import Navbar from "components/Navbar";
import SimpleCardSection from "components/CardsSection";
import CardSection from "components/CardsSection";
 

 

export function Welcome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-black text-slate-800 dark:text-slate-100">
      <Navbar />

      {/* Hero section (your existing hero) */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-6">
        <img src="/doctors.gif" alt="doctors illustration" className="w-56 sm:w-72 md:w-96 h-auto object-contain animate-fade-in" loading="eager" />

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight max-w-4xl">
          <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 bg-clip-text text-transparent">Revolutionizing healthcare</span>{" "}
          through intelligent digital solutions
        </h1>

        <p className="max-w-2xl text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Go paperless with digital appointments, smart prescriptions, and secure records — powered by Health AI.
        </p>
 
      </section>

      {/* ← Insert the cards section here */}
      <HeroCard />
      <CardSection/>
      {/* rest of your page (callout, footer, etc.) */}
      <section className="w-full bg-white/60 dark:bg-slate-900/70 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold">Secure records. Better outcomes.</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl">Store patient history, prescriptions and lab reports in one safe place — accessible to patients and clinicians.</p>
          </div>

          <div className="flex justify-center md:justify-end">
            <a href="/signup" className="px-5 py-2.5 rounded-lg bg-green-600 text-white font-medium">Get Started</a>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="w-full mt-12 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
             
            <div className="text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Doctor's Connect. All rights reserved.</div>
          </div>

          <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-400">
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeInUp 800ms ease both; }
      `}</style>
    </main>
  );
}

export default Welcome;
