const EMAIL = "19950426kim@gmail.com";

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
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#111827] text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#111827_0%,#172554_48%,#1E293B_100%)]" />
      <div className="absolute left-[6%] top-[10%] h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute right-[8%] top-[14%] h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-start gap-16 px-6 pb-10 pt-10 lg:grid-cols-[1.16fr_0.84fr]">
        <div className="animate-fadeUp">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
            Product Manager · AI Workflow · 1인 기획
          </div>

          <p className="mt-6 text-sm font-medium text-slate-300">
            김유정 · Jennifer Kim
          </p>

          <h1 className="mt-6 max-w-[720px] text-4xl font-extrabold leading-[1.04] tracking-tight text-white md:text-[74px]">
            복잡한 서비스를
            <br />
            실행 가능한 구조로
            <br />
            만드는 PM
          </h1>

          <p className="mt-7 max-w-2xl text-[17px] leading-[1.85] text-slate-300">
            AI 도구로 빠르게 구체화하고, PM의 기준으로 정책·흐름·예외
            케이스까지 정리합니다. K-pop 투표 플랫폼, AI 시니어 컨시어지,
            개인 부동산 거래 플랫폼, 커머스 어드민까지 다양한 도메인의
            요구사항을 사용자 흐름과 운영 구조 중심으로 풀어냅니다.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cases"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-8 text-sm font-bold text-slate-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              View Case Studies
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Contact
            </a>
          </div>
        </div>

        <aside className="animate-fadeUp mt-2 self-start rounded-[30px] border border-white/20 bg-white/[0.10] p-6 text-white shadow-[0_28px_90px_rgba(15,23,42,0.28)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-bold tracking-[0.18em] text-slate-200">
              IMPACT SNAPSHOT
            </p>

            <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold text-slate-100">
              AI-enabled PM
            </span>
          </div>

          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="text-sm font-medium text-slate-300">
              1인 기획 프로젝트
            </p>

            <div className="mt-3">
              <p className="text-[58px] font-extrabold leading-none tracking-tight text-white">
                4개 도메인+
              </p>

              <p className="mt-3 text-sm font-medium text-indigo-200">
                Platform · AI Service · Commerce Admin
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.10] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.14]">
              <p className="text-xs font-semibold text-slate-300">
                Wireframe
              </p>
              <p className="mt-1.5 text-[40px] font-extrabold leading-none text-white">
                4일
              </p>
              <p className="mt-2 text-xs text-slate-400">Cursor 기반 구현</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.10] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.14]">
              <p className="text-xs font-semibold text-slate-300">
                Storyboard
              </p>
              <p className="mt-1.5 text-[40px] font-extrabold leading-none text-white">
                3일
              </p>
              <p className="mt-2 text-xs text-slate-400">GPT 초안 + PM 검수</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-indigo-300/20 bg-indigo-400/[0.08] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-300">
              AI Workflow
            </p>

            <p className="mt-2 text-[13px] leading-[1.7] text-slate-300">
              AI 기반 워크플로우로 기획 산출 속도를 단축하고, 실제 개발 가능한
              수준까지 구조화합니다.
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-300">
              Domain Coverage
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {domains.map((domain) => (
                <span
                  key={domain}
                  className="rounded-full border border-white/10 bg-white/[0.12] px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  {domain}
                </span>
              ))}
            </div>

            <p className="mt-3 text-[13px] leading-[1.7] text-slate-300">
              도메인별 요구사항을 사용자 흐름과 운영 구조 기준으로 빠르게
              구조화합니다.
            </p>
          </div>
        </aside>

        <div className="lg:col-span-2">
          <div className="mt-0 max-w-3xl border-l border-indigo-400/40 pl-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-300">
              AI Workflow → Product Structure → Deliverable
            </p>

            <p className="mt-2 text-sm leading-[1.8] text-slate-300">
              빠르게 만들되, 가볍게 끝내지 않습니다. AI로 산출 속도를 높이고,
              PM의 검수 기준으로 실제 개발과 운영에 연결되는 기획 산출물을
              완성합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}