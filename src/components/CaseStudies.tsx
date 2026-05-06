import { useState } from "react";
import type { ReactNode } from "react";
import type { CaseStudy } from "../data/caseStudies";

function getTopResults(study: CaseStudy) {
  return study.result.slice(0, 3);
}

function SummaryResult({ study }: { study: CaseStudy }) {
  const kpis = study.highlightResults
    ? [
        {
          label: "Wireframe",
          value: "4일",
          detail: "Cursor 기반 화면 구현·검증",
        },
        {
          label: "Storyboard",
          value: "3일",
          detail: "GPT 초안 + PM 검수",
        },
        {
          label: "Lead Time",
          value: "약 80%+",
          detail: "전체 기획 리드타임 단축",
        },
      ]
    : getTopResults(study);

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {kpis.map((r) => (
        <div
          key={r.label}
          className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
        >
          <p className="text-xs font-semibold text-slate-500">{r.label}</p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-indigo-600">
            {r.value}
          </p>

          {r.detail ? (
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              {r.detail}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
        {title}
      </p>
      <div className="mt-3 text-sm leading-relaxed text-slate-600">
        {children}
      </div>
    </div>
  );
}

function CaseStudyCard({ study, idx }: { study: CaseStudy; idx: number }) {
  const [open, setOpen] = useState(false);
  const image = (study as any).image as string | undefined;

  return (
    <article
      id={`case-${study.id}`}
      className="reveal scroll-mt-28 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)]"
    >
      <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-950 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              Case {String(idx + 1).padStart(2, "0")}
            </span>

            {study.highlightResults ? (
              <span className="rounded-full bg-indigo-600 px-2.5 py-1 text-[11px] font-bold text-white">
                AX Impact
              </span>
            ) : null}

            {study.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-600"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
            {study.title}
          </h3>

          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            {study.tagline}
          </p>

          {study.meta ? (
            <dl className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500 md:text-sm">
              <div>
                <dt className="font-semibold text-slate-400">기간</dt>
                <dd className="mt-1 font-medium text-slate-700">
                  {study.meta.period}
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-400">기여</dt>
                <dd className="mt-1 font-medium text-slate-700">
                  {study.meta.contribution}
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-400">팀</dt>
                <dd className="mt-1 font-medium text-slate-700">
                  {study.meta.team}
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-400">산출</dt>
                <dd className="mt-1 font-medium text-slate-700">
                  {study.meta.deliverable}
                </dd>
              </div>
            </dl>
          ) : null}
        </div>

        <div className="border-t border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 p-6 md:p-8 lg:border-l lg:border-t-0">
          {image ? (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                src={image}
                alt={`${study.title} preview`}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex h-full min-h-[260px] flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                PM Focus
              </p>

              <h4 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-slate-950">
                {study.pmFocus?.title ?? "프로젝트 핵심 기획 포인트"}
              </h4>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">
                {study.pmFocus?.description ??
                  "문제 정의부터 구조 설계, 산출물 완성까지 PM 관점에서 핵심 흐름을 정리했습니다."}
              </p>

              <div className="mt-8 border-l-2 border-indigo-500 pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Key Question
                </p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-800">
                  {study.pmFocus?.question ??
                    "이 프로젝트에서 가장 먼저 풀어야 할 구조적 문제는 무엇인가?"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-6 py-7 md:px-8">
        <SummaryResult study={study} />

        <div className="mt-6 grid gap-4 md:grid-cols-[0.9fr_1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Problem
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {study.problem}
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-500">
              What I Changed
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              {study.solution}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Takeaway
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {study.learning}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
        >
          {open ? "판단 과정 접기" : "문제 정의와 검증 과정 보기"}
          <span className="ml-2">{open ? "↑" : "↓"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-6 py-7 md:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <DetailBlock title="Why">
              <p>{study.why}</p>
            </DetailBlock>

            <DetailBlock title="Hypothesis">
              <p>{study.hypothesis}</p>
            </DetailBlock>

            <DetailBlock title="Experiment">
              <p>{study.experiment}</p>
            </DetailBlock>

            <DetailBlock title="Learning">
              <p>{study.learning}</p>
            </DetailBlock>
          </div>

          {study.uxNote ? (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                UX Reasoning
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {study.uxNote}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function CaseStudies({ items }: { items: CaseStudy[] }) {
  return (
    <section id="cases" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="reveal max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600">
            Case Studies
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            지표를 움직인 제품 개선 사례
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            문제 정의부터 실험, 검증까지. 사용자의 행동 변화를 만들기 위해
            어떤 구조를 바꿨는지 중심으로 정리했습니다.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-10">
          {items.map((study, idx) => (
            <CaseStudyCard key={study.id} study={study} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}