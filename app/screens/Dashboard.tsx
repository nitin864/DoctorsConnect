// components/PatientDashboard.tsx
import React from "react";

export type Appointment = {
  id: number;
  doctor: string;
  specialty: string;
  date: string;  
  time: string;
  location?: string;
};

export type Prescription = {
  id: number;
  title: string;
  issuedOn: string;
  expiresOn?: string;
  pharmacy?: string;
};

export type NotificationItem = {
  id: number;
  text: string;
  type?: "info" | "alert";
  date?: string;
};

const mockAppointments: Appointment[] = [
  { id: 1, doctor: "Dr. Aisha Verma", specialty: "Cardiology", date: "2025-11-20", time: "10:00 AM", location: "City Hospital" },
  { id: 2, doctor: "Dr. Rohit Singh", specialty: "Dermatology", date: "2025-11-25", time: "02:00 PM", location: "Sunrise Clinic" },
];

const mockPrescriptions: Prescription[] = [
  { id: 1, title: "Atorvastatin 10mg", issuedOn: "2025-10-01", expiresOn: "2026-04-01", pharmacy: "Apollo Pharmacy" },
  { id: 2, title: "Cetirizine 10mg", issuedOn: "2025-09-10", pharmacy: "City Pharmacy" },
];

const mockNotifications: NotificationItem[] = [
  { id: 1, text: "Your lab results are ready to view.", type: "info", date: "2025-11-10" },
  { id: 2, text: "Reminder: appointment with Dr. Aisha on Nov 20.", type: "info", date: "2025-11-15" },
];

export default function PatientDashboard(): React.ReactElement {
  const patientName = "John Doe"; 

  return (
    <div className="min-h-screen bg-gray-50 p-6"
     
           style={{
        background: "linear-gradient(to bottom, #071427 0%, #050d1a 40%, #030812 100%)",
        color: "white",}}
    
    >
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <header className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Welcome back, {patientName} 👋</h1>
            <p className="text-sm text-gray-500 mt-1">Here’s what’s happening with your care.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => console.log("Book new appointment")}
              className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
            >
              + Book Appointment
            </button>
            <button
              onClick={() => console.log("Open messages")}
              className="px-3 py-2 bg-white border border-gray-200 rounded-md text-gray-700 hover:shadow"
            >
              Messages
            </button>
          </div>
        </header>

        {/* Grid */}
        <main className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: Appointments & Prescriptions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming appointments */}
            <section className="bg-white rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-800">Upcoming Appointments</h2>
                <p className="text-sm text-gray-500">{mockAppointments.length} scheduled</p>
              </div>

              <div className="mt-4 space-y-3">
                {mockAppointments.length === 0 ? (
                  <p className="text-sm text-gray-500">No upcoming appointments.</p>
                ) : (
                  mockAppointments.map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between p-3 rounded-md border border-gray-100">
                      <div>
                        <p className="text-sm text-indigo-700 font-semibold">{apt.doctor}</p>
                        <p className="text-sm text-gray-600">{apt.specialty} • {apt.location}</p>
                        <p className="text-sm text-gray-500">{apt.date} • {apt.time}</p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => alert(`Reschedule ${apt.id}`)}
                          className="text-sm text-blue-600 underline"
                        >
                          Reschedule
                        </button>
                        <button
                          onClick={() => alert(`View appointment ${apt.id}`)}
                          className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* Prescriptions */}
            <section className="bg-white rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-800">Active Prescriptions</h2>
                <p className="text-sm text-gray-500">{mockPrescriptions.length}</p>
              </div>

              <ul className="mt-4 space-y-3">
                {mockPrescriptions.map((rx) => (
                  <li key={rx.id} className="flex items-center justify-between p-3 rounded-md border border-gray-100">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{rx.title}</p>
                      <p className="text-xs text-gray-500">
                        Issued: {rx.issuedOn} {rx.expiresOn ? ` • Expires: ${rx.expiresOn}` : ""}
                      </p>
                      {rx.pharmacy && <p className="text-xs text-gray-500">Pharmacy: {rx.pharmacy}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => alert(`Download prescription ${rx.id}`)}
                        className="text-sm text-indigo-600 underline"
                      >
                        Download
                      </button>
                      <button
                        onClick={() => alert(`Refill ${rx.id}`)}
                        className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm"
                      >
                        Refill
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right column: Quick actions & Notifications */}
          <aside className="space-y-6">
            <section className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-md font-medium text-gray-800">Quick Actions</h3>
              <div className="mt-3 grid grid-cols-1 gap-3">
                <button onClick={() => console.log("Open records")} className="w-full px-3 py-2 border rounded-md text-sm hover:shadow">View Records</button>
                <button onClick={() => console.log("Start teleconsult")} className="w-full px-3 py-2 border rounded-md text-sm hover:shadow">Start Teleconsult</button>
                <button onClick={() => console.log("Contact support")} className="w-full px-3 py-2 border rounded-md text-sm hover:shadow">Contact Support</button>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-md font-medium text-gray-800">Notifications</h3>
              <ul className="mt-3 space-y-2">
                {mockNotifications.map((n) => (
                  <li key={n.id} className={`p-2 rounded-md text-sm ${n.type === "alert" ? "bg-red-50 text-red-700" : "bg-indigo-50 text-indigo-700"}`}>
                    <div className="flex items-center justify-between">
                      <span>{n.text}</span>
                      <small className="text-xs text-gray-500">{n.date}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </main>
      </div>
    </div>
  );
}
