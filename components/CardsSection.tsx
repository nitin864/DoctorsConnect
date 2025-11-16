// components/CardsSection.tsx
import React from "react";
import HeroCard from "./HeroCard";

type CardItem = {
  variant?: "blue" | "purple" | "coral" | "green";
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  cta?: { text: string; href?: string };
  imageSrc?: string;
};

const cards: CardItem[] = [
  {
    variant: "blue",
    eyebrow: "FIND DOCTORS",
    title: (
      <>
        Connect with <span className="font-bold">top specialists</span> instantly
      </>
    ),
    description:
      "Search thousands of verified doctors, view profiles, and book appointments effortlessly.",
    cta: { text: "Find a Doctor", href: "/doctors" },
    imageSrc: "/demo/find-doctor.png",
  },
  {
    variant: "purple",
    eyebrow: "APPOINTMENTS",
    title: (
      <>
        Book appointments <span className="font-bold">in seconds</span>
      </>
    ),
    description:
      "Schedule in-clinic or video consultations with a smooth, modern, and AI-powered booking system.",
    cta: { text: "Book Now", href: "/appointments" },
    imageSrc: "/demo/appointments.png",
  },
  {
    variant: "green",
    eyebrow: "MEDICAL RECORDS",
    title: (
      <>
        Your records, <span className="font-bold">stored safely</span>
      </>
    ),
    description:
      "Access prescriptions, lab reports, and health files—anytime, anywhere—fully encrypted.",
    cta: { text: "View Records", href: "/records" },
    imageSrc: "/demo/records.png",
  },
  {
    variant: "coral",
    eyebrow: "FOLLOW-UPS",
    title: "Never miss a follow-up",
    description:
      "Smart reminders, doctor notes, and automated check-ins keep your care on track.",
    cta: { text: "View Reminders", href: "/follow-ups" },
    imageSrc: "/demo/followups.png",
  },
];

export default function CardsSection(): JSX.Element {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-6">
      {cards.map((card, idx) => (
        <div key={idx} className="transition-transform hover:-translate-y-1">
          <HeroCard
            variant={card.variant}
            eyebrow={card.eyebrow}
            title={card.title}
            description={card.description}
            cta={card.cta}
            imageSrc={card.imageSrc}
          />
        </div>
      ))}
    </section>
  );
}
