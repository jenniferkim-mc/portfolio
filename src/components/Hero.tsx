"use client";

import { useState } from "react";

const EMAIL = "19950426kim@gmail.com";
const PHONE_DISPLAY = "010-5508-9646";
const PHONE_TEL = "01055089646";

const highlights = [
  "1인 기획",
  "AI-enabled PM",
  "Commerce Admin",
  "Platform Planning",
  "AX Workflow",
  "Wireframe · Storyboard",
];

const domains = [
  "K-pop 투표 플랫폼",
  "AI 시니어 컨시어지",
  "개인 부동산 거래 플랫폼",
  "커머스 어드민",
];

export function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#111827] text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#111827_0%,#172554_48%,#1E293B_100%)]" />
      <div className="absolute left-[6%] top-[10%] h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute right-[8%] top-[14%] h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-start gap-14 px-6 pb-10 pt-10 lg:grid-cols-[1.18fr_0.82fr]">
        <div className="animate-fadeUp">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md md:text-xs">
            Product Manager · AI Workflow · 1인 기획
          </div>

          <p className="mt-5 text-sm font-medium text-slate-300">
            김유정 · Jennifer Kim
          </p>

          <h1 className="mt-5 max-w-[560px] text-[40px] font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-[48px] md:text-[54px] lg:text-[58px]">
            복잡한 서비스를
            <br />
            실행 가능한 구조로
            <br />
            만드는 PM
          </h1>

          <p className="mt-6 max-w-[560px] text-[14px] leading-[1.85] text-slate-300 md:text-[15px]">
            AI 도구로 빠르게 구체화하고, PM의 기준으로 정책·흐름·예외
            케이스까지 정리합니다. K-pop 투표 플랫폼, AI 시니어 컨시어지,
            개인 부동산 거래 플랫폼, 커머스 어드민까지 다양한 도메인의
            요구사항을 사용자 흐름과 운영 구조 중심으로 풀어냅니다.
          </p>

          <div className="mt-6 flex max-w-[560px] flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-md md:text-xs"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cases"
              className="inline-flex h-10 items-center justify-center rounded-2xl bg-white px-7 text-sm font-bold text-slate-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              View Case Studies
            </a>

            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="inline-flex h-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Contact
            </button>
          </div>
        </div>

        <aside className="animate-fadeUp mt-2 w-full max-w-[460px] justify-self-end rounded-[28px] border border-white/18 bg-white/[0.07] p-5 text-white shadow-[0_24px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] font-bold tracking-[0.18em] text-slate-200">
              IMPACT SNAPSHOT
            </p>

            <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-slate-100">
              AI-enabled PM
            </span>
          </div>

          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="text-xs font-medium text-slate-300">
              1인 기획 프로젝트
            </p>

            <div className="mt-2">
              <p className="text-[40px] font-bold leading-none tracking-[-0.035em] text-white md:text-[42px]">
                4개 도메인+
              </p>

              <p className="mt-2 text-xs font-medium text-indigo-200">
                Platform · AI Service · Commerce Admin
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-3.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.12]">
              <p className="text-[11px] font-semibold text-slate-300">
                Wireframe
              </p>
              <p className="mt-1.5 text-[28px] font-bold leading-none text-white">
                4일
              </p>
              <p className="mt-1.5 text-[11px] text-slate-400">
                Cursor 기반 구현
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-3.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.12]">
              <p className="text-[11px] font-semibold text-slate-300">
                Storyboard
              </p>
              <p className="mt-1.5 text-[28px] font-bold leading-none text-white">
                3일
              </p>
              <p className="mt-1.5 text-[11px] text-slate-400">
                GPT 초안 + PM 검수
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-indigo-300/20 bg-indigo-400/[0.07] p-3.5">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-300">
              AI Workflow
            </p>

            <p className="mt-2 text-[12px] leading-[1.65] text-slate-300">
              AI 기반 워크플로우로 기획 산출 속도를 단축하고, 실제 개발 가능한
              수준까지 구조화합니다.
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-300">
              Domain Coverage
            </p>

            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {domains.map((domain) => (
                <span
                  key={domain}
                  className="rounded-full border border-white/10 bg-white/[0.10] px-2.5 py-1 text-[10px] font-medium text-slate-200"
                >
                  {domain}
                </span>
              ))}
            </div>

            <p className="mt-2.5 text-[12px] leading-[1.65] text-slate-300">
              도메인별 요구사항을 사용자 흐름과 운영 구조 기준으로 빠르게
              구조화합니다.
            </p>
          </div>
        </aside>

        <div className="lg:col-span-2">
          <div className="mt-0 max-w-3xl border-l border-indigo-400/40 pl-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-indigo-300 md:text-xs">
              AI Workflow → Product Structure → Deliverable
            </p>

            <p className="mt-2 text-[13px] leading-[1.75] text-slate-300 md:text-sm">
              빠르게 만들되, 가볍게 끝내지 않습니다. AI로 산출 속도를 높이고,
              PM의 검수 기준으로 실제 개발과 운영에 연결되는 기획 산출물을
              완성합니다.
            </p>
          </div>
        </div>
      </div>

      {isContactOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[30px] border border-white/10 bg-[#1E2A4D] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-300">
                  Contact
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">연락처</h3>
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
    </section>
  );
}