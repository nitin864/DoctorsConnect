import React from "react";

export default function DoctorConnectHeroCards() {
  return (
    <div className="space-y-10 p-6 max-w-6xl mx-auto">

      {/* ----------------------------------------------------- */}
      {/* CARD 1 — Doctor AI Tool */}
      {/* ----------------------------------------------------- */}
      <div className="rounded-3xl bg-gradient-to-r from-[#eef4ff] to-[#dce8ff] p-10 shadow-sm border border-white/50">
        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* LEFT */}
          <div className="flex-1">
            <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
              DOCTOR CONNECT TOOL
            </span>

            <h1 className="mt-4 text-4xl font-bold text-slate-900 leading-tight">
              Empower your <span className="text-blue-600">practice</span> with <br />
              Doctor Connect AI
            </h1>

            <p className="mt-4 text-slate-600 max-w-xl">
              Streamline operations and enhance patient care with Doctor Connect’s AI-driven Doctor Tool.
            </p>

            {/* BADGES */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-6 text-xs text-slate-500">
              {[
                "NHA Approved",
                "ABDM Compliant",
                "AWS Secured",
                "FHIR Compliant",
                "Google Partner",
                "ISO Certified",
              ].map((b, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-white rounded-md shadow flex items-center justify-center">✓</div>
                  <span className="mt-1 text-center">{b}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">
              Learn More →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-end">
            <img src="/images/doctor-hero-1.png" className="w-80" alt="" />
          </div>
        </div>
      </div>


      {/* ----------------------------------------------------- */}
      {/* CARD 2 — Patient App */}
      {/* ----------------------------------------------------- */}
      <div className="rounded-3xl bg-gradient-to-r from-[#f3e8ff] to-[#e5d4ff] p-10 shadow-sm border border-white/50">
        <div className="flex flex-col lg:flex-row items-center gap-8">

          <div className="flex-1">
            <span className="px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-700 rounded-full">
              DOCTOR CONNECT PATIENT APP
            </span>

            <h1 className="mt-4 text-4xl font-bold text-slate-900 leading-tight">
              Your <span className="text-purple-600">health journey</span> made simple
            </h1>

            <p className="mt-4 text-slate-600 max-w-xl">
              Track vitals, store health records, manage prescriptions,
              and stay connected with your doctor at all times.
            </p>

            <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition">
              Explore App →
            </button>
          </div>

          <div className="flex-1 flex justify-end">
            <img src="/images/patient-app.png" className="w-80" alt="" />
          </div>
        </div>
      </div>


      {/* ----------------------------------------------------- */}
      {/* CARD 3 — Hospital Solutions */}
      {/* ----------------------------------------------------- */}
      <div className="rounded-3xl bg-gradient-to-r from-[#e0f8ff] to-[#c8f0ff] p-10 shadow-sm border border-white/50">
        <div className="flex flex-col lg:flex-row items-center gap-8">

          <div className="flex-1">
            <span className="px-3 py-1 text-xs font-semibold bg-cyan-100 text-cyan-700 rounded-full">
              DOCTOR CONNECT FOR HOSPITALS
            </span>

            <h1 className="mt-4 text-4xl font-bold text-slate-900 leading-tight">
              Smart tools for <span className="text-cyan-600">hospital workflows</span>
            </h1>

            <p className="mt-4 text-slate-600 max-w-xl">
              Multi-doctor scheduling, queue systems, EMR integration,
              billing automation and analytics — all in one place.
            </p>

            <button className="mt-8 px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold shadow hover:bg-cyan-700 transition">
              Get Started →
            </button>
          </div>

          <div className="flex-1 flex justify-end">
            <img src="/images/hospital.png" className="w-80" alt="" />
          </div>
        </div>
      </div>


      {/* ----------------------------------------------------- */}
      {/* CARD 4 — APIs */}
      {/* ----------------------------------------------------- */}
      <div className="rounded-3xl bg-gradient-to-r from-[#e8f0ff] to-[#d4e1ff] p-10 shadow-sm border border-white/50">
        <div className="flex flex-col lg:flex-row items-center gap-8">

          <div className="flex-1">
            <span className="px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-700 rounded-full">
              DOCTOR CONNECT APIs
            </span>

            <h1 className="mt-4 text-4xl font-bold text-slate-900 leading-tight">
              Build on top of <span className="text-indigo-600">Doctor Connect</span>
            </h1>

            <p className="mt-4 text-slate-600 max-w-xl">
              Integrate appointments, EMR, e-prescriptions and remote vitals
              into your application with Doctor Connect APIs.
            </p>

            <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition">
              Explore APIs →
            </button>
          </div>

          <div className="flex-1 flex justify-end">
            <img src="/images/api-devices.png" className="w-80" alt="" />
          </div>
        </div>
      </div>

    </div>
  );
}
