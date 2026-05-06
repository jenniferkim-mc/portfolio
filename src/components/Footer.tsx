const EMAIL = "19950426kim@gmail.com";
const PHONE = "010-5508-964";

const quickLinks = [
  { href: "#about", label: "About me" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#cases", label: "Cases" },
  { href: "#thinking", label: "Thinking" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-semibold text-ink">김유정 (Jennifer Kim)</p>
          <p className="mt-1 text-sm text-ink-secondary">
            {PHONE} · {EMAIL}
          </p>
          <p className="mt-1 text-sm text-ink-subtle">
            © {new Date().getFullYear()} · PM / 서비스기획
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-ink-secondary">
          <a href="#hero" className="hover:text-accent">
            Home
          </a>
          {quickLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent">
              {l.label}
            </a>
          ))}
          <a href={`mailto:${EMAIL}`} className="hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
