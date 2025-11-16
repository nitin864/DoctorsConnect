import React from "react";

function HeroCard() {
  const cards = [
    {
      icon: "📅", // Replace with SVG icons for better visuals if needed
      title: "Digital Appointments",
      description: "Effortlessly book and manage appointments with automated reminders and instant confirmations.",
    },
    {
      icon: "💊",
      title: "Smart Prescriptions", 
      description: "Electronic prescriptions with delivery, refill notifications, and pharmacy integration.",
    },
    {
      icon: "🔒",
      title: "Secure Records",
      description: "Encrypted storage for patient history, lab reports, and medical data, accessible securely.",
    },
    {
      icon: "📞",
      title: "Telemedicine",
      description: "Virtual consultations with video calls, secure messaging, and remote monitoring.",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
        Revolutionize Your Healthcare Experience
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
          >
            <div className="text-5xl mb-4 text-center">{card.icon}</div>
            <h3 className="text-lg font-semibold mb-3 text-center text-slate-800 dark:text-slate-100">
              {card.title}
            </h3>
            <p className="text-sm text-center text-gray-600 dark:text-gray-300 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroCard;
