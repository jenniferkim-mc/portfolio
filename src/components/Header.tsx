import { useState } from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#cases", label: "Cases" },
  { href: "#thinking", label: "Thinking" },
];

const EMAIL = "19950426kim@gmail.com";
const PHONE_DISPLAY = "010-5508-9646";
const PHONE_TEL = "01055089646";

export function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:gap-6 md:px-8 md:py-4">
          <a href="#hero" className="flex min-w-0 shrink-0 items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-ink text-sm font-bold text-white shadow-card">
              김
            </span>

            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-bold text-ink">김유정</p>
              <p className="truncate text-xs font-medium text-ink-secondary">
                Commerce PM
              </p>
            </div>
          </a>

          <nav
            className="flex min-w-0 flex-1 justify-end gap-0.5 overflow-x-auto md:justify-center"
            aria-label="주요 섹션"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="shrink-0 rounded-xl px-2 py-2 text-[11px] font-medium text-ink-secondary transition hover:bg-surface-muted hover:text-ink sm:px-2.5 md:px-3 md:text-sm"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-accent px-3 py-2 text-xs font-semibold text-white shadow-lift transition hover:bg-accent-dark md:px-4 md:text-sm"
          >
            Contact
          </button>
        </div>
      </header>

      {isContactOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[30px] border border-white/10 bg-[#1E2A4D] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-300">
                  Contact
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  연락처
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 transition hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="mt-7 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Email
                </p>

                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-2 block text-base font-semibold text-white transition hover:text-indigo-300"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Phone
                </p>

                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-2 block text-base font-semibold text-white transition hover:text-indigo-300"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsContactOpen(false)}
              className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
