const EMAIL = "19950426kim@gmail.com";

const highlights = [
  "1인 기획",
  "Commerce Admin",
  "AI Service",
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
      className="relative min-h-[92vh] overflow-hidden bg-[#111827] text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#111827_0%,#1E293B_50%,#334155_100%)]" />
      <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute right-[10%] top-[16%] h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="animate-fadeUp">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
            Product Manager · 1인 기획 · AX Workflow
          </div>

          <p className="mt-6 text-sm font-medium text-slate-300">
            김유정 · Jennifer Kim
          </p>

          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl">
            복잡한 서비스를
            <br />
            혼자 구조화해
            <br />
            실행 가능한 기획으로 만드는 PM
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            K-pop 투표 플랫폼, AI 시니어 컨시어지, 개인 부동산 거래 플랫폼,
            커머스 어드민까지 다양한 도메인의 서비스를 1인 기획으로 정리해왔습니다.
            문제를 기능 단위가 아니라 사용자 흐름·운영 구조·관리자 경험 단위로
            풀어내고, 개발팀과 디자인팀이 이해할 수 있는 언어로 풀어냅니다.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cases"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-7 text-sm font-bold text-slate-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              View Case Studies
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="animate-fadeUp rounded-[32px] border border-white/15 bg-white/10 p-6 text-white shadow-[0_30px_100px_rgba(15,23,42,0.24)] backdrop-blur-xl">
          <p className="text-xs font-bold tracking-[0.16em] text-slate-300">
            PLANNING IMPACT SUMMARY
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-white p-5 text-slate-950">
              <p className="text-sm font-semibold text-slate-500">
                1인 기획 프로젝트
              </p>
              <p className="mt-2 text-3xl font-extrabold tracking-tight">
                4개 도메인+
              </p>
              <p className="mt-1 text-sm text-slate-500">
                플랫폼·AI 서비스·커머스 어드민까지 단독 기획
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">와이어프레임</p>
                <p className="mt-2 text-2xl font-extrabold">4일</p>
                <p className="mt-1 text-xs text-slate-400">
                  Cursor 기반 AX 워크플로우
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">스토리보드</p>
                <p className="mt-2 text-2xl font-extrabold">3일</p>
                <p className="mt-1 text-xs text-slate-400">
                  GPT 초안 + PM 검수·보강
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-xs font-bold tracking-[0.16em] text-indigo-300">
                DOMAIN COVERAGE
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <span
                    key={domain}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    {domain}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
              도메인 이해부터 구조 설계, 개발 인계 가능한 산출물 완성까지
              기획 실행력을 중심으로 문제를 해결합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="mt-4 border-t border-white/10 pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-300">
              Domain Understanding → Structure → Deliverable
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
            다양한 도메인의 복잡한 요구사항을 빠르게 구조화하고,
            개발이 가능한 형태의 기획 산출물로 완성합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}