import type { ExperienceItem } from "../data/resume";

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="reveal flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card md:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-ink md:text-xl">
            {item.company}
            {item.companyKo ? (
              <span className="ml-2 font-normal text-ink-secondary">
                ({item.companyKo})
              </span>
            ) : null}
          </h3>

          {item.team ? (
            <p className="mt-1 text-sm font-medium text-accent">{item.team}</p>
          ) : null}

          <p className="mt-3 text-sm font-semibold text-ink">{item.role}</p>

          {item.location ? (
            <p className="mt-1 text-xs text-ink-subtle">{item.location}</p>
          ) : null}
        </div>

        <span className="shrink-0 rounded-full bg-surface-muted px-3 py-1 text-[11px] font-semibold text-ink-secondary">
          {item.period}
        </span>
      </div>

      <ul className="mt-5 flex-1 space-y-2 border-t border-slate-100 pt-4 text-sm leading-relaxed text-ink-secondary">
        {item.highlights.map((h) => (
          <li key={`${h.strong}-${h.text}`} className="flex gap-2">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
              aria-hidden
            />
            <span>
              <span className="font-semibold text-ink">{h.strong}</span>
              <span className="text-ink-secondary"> — {h.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <section
      id="experience"
      className="scroll-mt-28 border-b border-slate-200/60 bg-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="reveal max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            경력
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
            커머스·AI·중개플랫폼·마케팅 현장에서 쌓은{" "}
            <span className="font-medium text-ink">약 3년</span>의 경험을 문제
            정의, 구조 설계, 정책 수립, 협업·핸드오프 역량 중심으로
            정리했습니다.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <ExperienceCard key={`${item.company}-${item.role}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}