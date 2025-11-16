import React from "react";

type Variant = "blue" | "purple" | "coral" | "green";

type HeroCardProps = {
  variant?: Variant;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  cta?: { text: string; href?: string };
  imageSrc?: string;
};

const variantStyles: Record<
  Variant,
  { bg: string; accent: string; text: string; ring: string }
> = {
  blue: {
    bg: "bg-gradient-to-r from-blue-50 to-white",
    accent: "from-blue-600 to-teal-400",
    text: "text-slate-900",
    ring: "ring-blue-200/40",
  },
  purple: {
    bg: "bg-gradient-to-r from-indigo-50 to-white",
    accent: "from-indigo-600 to-purple-500",
    text: "text-slate-900",
    ring: "ring-indigo-200/40",
  },
  coral: {
    bg: "bg-gradient-to-r from-rose-50 to-white",
    accent: "from-rose-500 to-amber-400",
    text: "text-slate-900",
    ring: "ring-rose-200/40",
  },
  green: {
    bg: "bg-gradient-to-r from-emerald-50 to-white",
    accent: "from-emerald-600 to-lime-400",
    text: "text-slate-900",
    ring: "ring-emerald-200/40",
  },
};

export default function HeroCard({
  variant = "blue",
  eyebrow,
  title,
  description,
  cta,
  imageSrc,
}: HeroCardProps) {
  const v = variantStyles[variant];

  const finalTitle = title ?? <span className="font-semibold">Title missing</span>;

  return (
    <article
      className={`w-full rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm ${v.bg} ${v.text} ring-1 ${v.ring}`}
      role="region"
    >
      <div className="flex-1 text-left">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-300">
              {eyebrow}
            </span>
          </div>
        )}

        <h3 className="text-lg md:text-xl font-semibold leading-snug">{finalTitle}</h3>

        {description && (
          <p className="mt-2 text-sm text-slate-600 dark:text-gray-300 max-w-xl">
            {description}
          </p>
        )}

        {cta && (
          <div className="mt-4">
            <a
              href={cta.href ?? "#"}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm bg-gradient-to-r ${v.accent} text-white shadow-sm hover:scale-[1.02] transform transition`}
            >
              {cta.text}
            </a>
          </div>
        )}
      </div>

      {imageSrc && (
        <div className="w-full md:w-48 flex-shrink-0">
          <img src={imageSrc} alt="" className="w-full h-auto rounded-lg object-cover shadow-sm" />
        </div>
      )}
    </article>
  );
}
