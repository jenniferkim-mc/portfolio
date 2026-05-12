import { useState } from "react";
import type { ReactNode } from "react";
import type { CaseStudy, RichTextSegment } from "../data/caseStudies";

function getTopResults(study: CaseStudy) {
  return study.result.slice(0, 3);
}

function RichText({ segments }: { segments: RichTextSegment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.bold ? (
          <span key={index} className="font-semibold text-slate-950">
            {segment.text}
          </span>
        ) : (
          <span key={index}>{segment.text}</span>
        )
      )}
    </>
  );
}

function SummaryResult({ study }: { study: CaseStudy }) {
  const kpis = study.highlightResults
    ? [
        {
          label: "Lead Time",
          value: "8주 → 1주",
          detail: "기획→프론트 약 88% 단축",
        },
        {
          label: "Wireframe",
          value: "3주 → 3일",
          detail: "VS Code·Claude 화면 구현",
        },
        {
          label: "Meeting",
          value: "90분 → 30분",
          detail: "회의 시간 약 66% 단축",
        },
      ]
    : getTopResults(study);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {kpis.map((r) => (
        <div
          key={r.label}
          className="rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm"
        >
          <p className="text-xs font-semibold tracking-wide text-slate-500">
            {r.label}
          </p>

          <p className="mt-3 text-3xl font-bold tracking-tight text-indigo-600 md:text-4xl">
            {r.value}
          </p>

          {r.detail ? (
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
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
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
        {title}
      </p>
      <div className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[15px]">
        {children}
      </div>
    </div>
  );
}

function InsightCard({
  title,
  children,
  variant = "default",
}: {
  title: string;
  children: ReactNode;
  variant?: "default" | "accent";
}) {
  const cardClass =
    variant === "accent"
      ? "border-indigo-100 bg-indigo-50/60"
      : "border-slate-200 bg-white";

  const titleClass =
    variant === "accent" ? "text-indigo-500" : "text-slate-400";

  return (
    <div className={`rounded-3xl border p-6 ${cardClass}`}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.18em] ${titleClass}`}
      >
        {title}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[15px]">
        {children}
      </p>
    </div>
  );
}

function CaseStudyCard({ study, idx }: { study: CaseStudy; idx: number }) {
  const [open, setOpen] = useState(false);
  const image = study.image;
  const wideImage = study.wideImage;

  const headerText = (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-slate-950 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white">
          Case {String(idx + 1).padStart(2, "0")}
        </span>

        {study.highlightResults ? (
          <span className="rounded-full bg-indigo-600 px-3 py-1.5 text-[11px] font-bold text-white">
            AX Impact
          </span>
        ) : null}

        {study.tags.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-[11px] font-semibold text-indigo-600"
          >
            {t}
          </span>
        ))}
      </div>

      <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
        {study.title}
      </h3>

      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
        <RichText segments={study.tagline} />
      </p>
    </>
  );

  const metaCard = study.meta ? (
    <dl
      className={`grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-xs text-slate-500 md:text-sm ${
        wideImage ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2"
      }`}
    >
      <div>
        <dt className="font-bold text-slate-400">기간</dt>
        <dd className="mt-1.5 font-semibold text-slate-800">
          {study.meta.period}
        </dd>
      </div>

      <div>
        <dt className="font-bold text-slate-400">기여</dt>
        <dd className="mt-1.5 font-semibold text-slate-800">
          {study.meta.contribution}
        </dd>
      </div>

      <div>
        <dt className="font-bold text-slate-400">팀</dt>
        <dd className="mt-1.5 font-semibold text-slate-800">
          {study.meta.team}
        </dd>
      </div>

      <div>
        <dt className="font-bold text-slate-400">산출</dt>
        <dd className="mt-1.5 font-semibold text-slate-800">
          {study.meta.deliverable}
        </dd>
      </div>
    </dl>
  ) : null;

  const headerContent = (
    <div className="px-6 py-8 md:px-8 md:py-10">
      {headerText}
      {metaCard ? <div className="mt-7">{metaCard}</div> : null}
    </div>
  );

  const sideContent = image ? (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <img
          src={image}
          alt={`${study.title} preview`}
          className="h-full w-full object-cover"
        />
      </div>
      {study.extraImages?.map((src, i) => (
        <div
          key={src}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <img
            src={src}
            alt={`${study.title} preview ${i + 2}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  ) : (
    <div className="flex h-full min-h-[280px] flex-col justify-center">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-indigo-600">
        PM Focus
      </p>

      <h4 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-3xl">
        {study.pmFocus?.title ?? "프로젝트 핵심 기획 포인트"}
      </h4>

      <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 md:text-[15px]">
        {study.pmFocus?.description ??
          "문제 정의부터 구조 설계, 산출물 완성까지 PM 관점에서 핵심 흐름을 정리했습니다."}
      </p>

      <div className="mt-8 rounded-3xl border border-indigo-100 bg-white/80 px-5 py-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          Key Question
        </p>
        <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-900 md:text-[15px]">
          {study.pmFocus?.question ??
            "이 프로젝트에서 가장 먼저 풀어야 할 구조적 문제는 무엇인가?"}
        </p>
      </div>
    </div>
  );

  return (
    <article
      id={`case-${study.id}`}
      className="reveal scroll-mt-28 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.05)]"
    >
      {wideImage && image ? (
        <>
          {headerContent}
          <div className="border-t border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50/50 p-6 md:p-8">
            {sideContent}
          </div>
        </>
      ) : (
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          {headerContent}
          <div className="border-t border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50/50 p-6 md:p-8 lg:border-l lg:border-t-0">
            {sideContent}
          </div>
        </div>
      )}

      <div className="border-t border-slate-200 bg-slate-50 px-6 py-8 md:px-8">
        <SummaryResult study={study} />

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <InsightCard title="Problem">
            <RichText segments={study.problem} />
          </InsightCard>

          <InsightCard title="What I Changed" variant="accent">
            <RichText segments={study.solution} />
          </InsightCard>
        </div>

        <div className="mt-4 rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
            PM Insight
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[15px]">
            <RichText segments={study.learning} />
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="mt-7 inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
        >
          {open ? "판단 과정 접기" : "문제 정의와 검증 과정 보기"}
          <span className="ml-2">{open ? "↑" : "↓"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-6 py-8 md:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <DetailBlock title="Why">
              <p>
                <RichText segments={study.why} />
              </p>
            </DetailBlock>

            <DetailBlock title="Hypothesis">
              <p>
                <RichText segments={study.hypothesis} />
              </p>
            </DetailBlock>

            <DetailBlock title="Experiment">
              <p>
                <RichText segments={study.experiment} />
              </p>
            </DetailBlock>

            <DetailBlock title="Learning">
              <p>
                <RichText segments={study.learning} />
              </p>
            </DetailBlock>
          </div>

          {study.uxNote ? (
            <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                UX Reasoning
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[15px]">
                <RichText segments={study.uxNote} />
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

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
            지표와 구조로 증명한 제품 개선 사례
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            문제 정의부터 실험, 검증까지. 사용자의 행동 변화를 만들기 위해
            어떤 구조를 바꾸고, 어떤 기준으로 실행했는지 정리했습니다.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-12">
          {items.map((study, idx) => (
            <CaseStudyCard key={study.id} study={study} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}