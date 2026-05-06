import type { EducationItem } from "../data/resume";

function EducationCard({ item }: { item: EducationItem }) {
  return (
    <article className="reveal flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card md:p-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
        {item.location}
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink md:text-2xl">
        {item.school}
      </h3>
      {item.schoolKo ? (
        <p className="mt-1 text-sm text-ink-secondary">{item.schoolKo}</p>
      ) : null}
      <p className="mt-4 text-sm font-semibold text-ink">{item.degree}</p>
      {item.period ? (
        <p className="mt-1 text-xs text-ink-subtle">{item.period}</p>
      ) : null}
      {item.detail ? (
        <p className="mt-4 flex-1 border-t border-slate-100 pt-4 text-sm leading-relaxed text-ink-secondary">
          {item.detail}
        </p>
      ) : null}
    </article>
  );
}

export function Education({ items }: { items: EducationItem[] }) {
  return (
    <section id="education" className="scroll-mt-28 border-b border-slate-200/60 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Education
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            학력
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-ink-secondary">
            영어 기반 커뮤니케이션, PM 실습 프로젝트, 데이터 분석 자격을 바탕으로{" "}
            <span className="font-medium text-ink">
              리서치·문서화·협업 역량
              </span>
              을 쌓았습니다.
            </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <EducationCard key={item.school} item={item} />
          ))}
        </div>

        <p className="reveal mt-10 rounded-3xl border border-slate-200/80 bg-white px-5 py-4 text-center text-sm text-ink-secondary shadow-card md:text-[15px]">
          업무 언어:{" "}
          <span className="font-semibold text-ink">Korean (native)</span> ·{" "}
          <span className="font-semibold text-ink">English (fluent)</span>
        </p>
      </div>
    </section>
  );
}
