const steps = [
  {
    kicker: "01 정의",
    headline: "문제 시각화",
    desc: "‘무엇이 문제인가’를 팀이 한 눈에 보고 이해할 수 있도록 시각화합니다.",
    caseLink: "야놀자 퍼널 / 멍냥제 문제 재정의",
  },
  {
    kicker: "02 가설 · 우선순위",
    headline: "가설 수립과 ICE 기법을 활용한 우선순위 정렬",
    desc: "측정 가능한 가설을 쓰고 ICE로 착수 순서를 정합니다. 리소스가 한정될수록 ‘한 번에 한 가설’이 해상도를 올립니다.",
    caseLink: "멍냥제 MVP 경계 · 바디샵 물량 규칙",
  },
  {
    kicker: "03 실행 · 검증",
    headline: "실작동 프로토타입으로 커뮤니케이션 코스트 ↓",
    desc: "VS Code, Claude로 만든 프로토타입을 배포하여 A/B테스트 등으로 검증합니다. 이 과정 안에서 프로토타입으로 소통함으로써 이해관계자와의 커뮤니케이션을 효율화합니다.",
    caseLink: "야놀자 A/B · 멍냥제 랜딩 지표",
  },
  {
    kicker: "04 회고 · 운영",
    headline: "프로세스 자산으로 남기기",
    desc: "KPT로 잘한 점·한계·개선안을 프로세스에 반영합니다. 특히 다부서 프로젝트에서는 리마인드와 진행 체크가 계획보다 중요합니다.",
    caseLink: "바디샵 스케줄 리듬 · PiMS AX 규칙",
  },
];

const loop = [
  { label: "문제 고정", detail: "데이터 + 정성 교차" },
  { label: "가설", detail: "변수·지표 명시" },
  { label: "실행", detail: "최소 비용 검증" },
  { label: "검증", detail: "A/B · 랜딩 · 트래킹" },
  { label: "회고", detail: "KPT → 다음 사이클" },
];

export function ProductThinking() {
  return (
    <section id="thinking" className="scroll-mt-28 border-t border-slate-200/60 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="reveal rounded-3xl border-2 border-accent/20 bg-gradient-to-br from-white via-accent-soft/25 to-white p-8 shadow-card md:p-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Product Thinking
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl md:leading-snug">
            저는 제품을 “문서”가 아니라{" "}
            <span className="text-accent">검증 가능한 가설의 연속</span>으로
            봅니다.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-secondary">
            문제를 한 문장으로 고정하고, 가설을 숫자에 걸고, 실행은 최소 비용으로
            돌린 뒤 회고로 프로세스를 다시 설계합니다. 아래 루프는 모든 케이스
            스터디의 공통 골격이며, 도구(Figma, Cursor, GPT 등)는 이 루프를 더
            빠르게 돌리기 위한 선택입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
            {loop.map((item, i) => (
              <div key={item.label} className="flex items-center gap-2 md:gap-3">
                <span className="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-2 shadow-sm">
                  <p className="text-sm font-semibold text-ink">{item.label}</p>
                  <p className="text-xs text-ink-secondary">{item.detail}</p>
                </div>
                {i < loop.length - 1 ? (
                  <span className="hidden text-ink-subtle sm:inline" aria-hidden>
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-16">
          <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
            실행 레일
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-secondary md:text-[15px]">
            단계 이름보다 중요한 것은 각 단계에서 “무엇이 나와야 다음으로
            넘어가는가”입니다. 각 카드에는 포트폴리오 사례를 붙여 두었습니다.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {steps.map((s, i) => (
              <div
                key={s.kicker}
                className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card md:p-7"
              >
                <div className="absolute right-4 top-4 font-mono text-4xl font-bold text-slate-100 md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                  {s.kicker}
                </p>
                <p className="mt-2 text-base font-semibold text-ink md:text-lg">
                  {s.headline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary md:text-[15px]">
                  {s.desc}
                </p>
                <p className="mt-3 border-t border-slate-100 pt-3 text-xs font-medium text-accent md:text-sm">
                  연결 케이스 · {s.caseLink}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-16 rounded-3xl border border-slate-200/90 bg-white p-8 text-center md:p-10">
          <p className="text-sm font-medium text-ink-secondary">
            상세 경력·학력·기간은{" "}
            <a href="#experience" className="font-semibold text-accent underline-offset-2 hover:underline">
              Experience
            </a>{" "}
            ·{" "}
            <a href="#education" className="font-semibold text-accent underline-offset-2 hover:underline">
              Education
            </a>{" "}
            섹션과 제출 이력서를 함께 봐 주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
