const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#cases", label: "Cases" },
  { href: "#thinking", label: "Thinking" },
];

const EMAIL = "19950426kim@gmail.com";

export function Header() {
  return (
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
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-accent px-3 py-2 text-xs font-semibold text-white shadow-lift transition hover:bg-accent-dark md:px-4 md:text-sm"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
