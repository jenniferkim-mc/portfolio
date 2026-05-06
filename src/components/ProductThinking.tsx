const pillars = [
  {
    title: "문제는 증상이 아니라 병목에서 고른다",
    body: "지표가 흔들릴 때 ‘기능이 부족하다’로 바로 가지 않습니다. 퍼널·클릭·VOC·전환을 겹쳐 보며, 어디서 멈추는지 한 문장으로 고정합니다. 야놀자 사례처럼 ‘없어서’가 아니라 ‘보이지 않아서’인지부터 가릅니다.",
  },
  {
    title: "가설은 반박 가능해야 한다",
    body: "‘좋아질 것이다’는 기획이 아니라 소망입니다. 바꾸는 변수·기대되는 지표·깨졌을 때의 해석까지 적어 두어야, 실험이 학습이 됩니다. 멍냥제 랜딩은 그 학습을 가장 싸게 사는 장치였습니다.",
  },
  {
    title: "ICE로 임팩트에 베팅한다",
    body: "비즈니스 임팩트와 디자인·개발 리소스를 같은 축에 둡니다. 모든 기능을 다 하기보다, 지표에 닿는 일부터 순서를 정합니다. 더바디샵 프로모션은 ‘현장 재고와 캘린더’가 그 임팩트의 중심이었습니다.",
  },
  {
    title: "학습 속도가 제품 속도다",
    body: "KPT 회고와 데일리 스크럼으로 ‘무엇이 바뀌었는지’를 짧게 돌립니다. AX(PiMS)에서는 산출 순서 자체를 바꿔, 회의가 문서 읽기가 아니라 프로토타입 앞의 결정이 되게 했습니다.",
  },
];

const steps = [
  {
    kicker: "01 정의",
    headline: "같은 그림으로 문제를 고정",
    desc: "Affinity, AS-IS / TO-BE, 플로우로 구조를 보이게 만듭니다. ‘무엇이 문제인가’를 팀이 같은 그림으로 볼 때까지 문장을 다듭니다.",
    caseLink: "야놀자 퍼널 / 멍냥제 문제 재정의",
  },
  {
    kicker: "02 가설 · 우선순위",
    headline: "베팅할 변수와 순서",
    desc: "측정 가능한 가설을 쓰고 ICE로 착수 순서를 정합니다. 리소스가 한정될수록 ‘한 번에 한 가설’이 해상도를 올립니다.",
    caseLink: "멍냥제 MVP 경계 · 바디샵 물량 규칙",
  },
  {
    kicker: "03 실행 · 검증",
    headline: "최소 비용으로 돌리기",
    desc: "프로토타입·랜딩·주간 트래킹처럼 검증 수단을 고릅니다. What · Why · How로 이해관계자와 맞추고, 숫자로 다음 액션을 남깁니다.",
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

        <div className="reveal mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              나만의 원칙
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary md:text-[15px]">
              마케팅 PM으로 매출에 따라 매주 전략을 바꿔 본 경험을 제품에
              이식했습니다. 정량과 정성을 같이 두고, 소통은 What · Why · How로
              정리합니다.
            </p>

            <ul className="mt-8 space-y-4">
              {pillars.map((p) => (
                <li
                  key={p.title}
                  className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-ink">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              실행 레일
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary md:text-[15px]">
              단계 이름보다 중요한 것은 각 단계에서 “무엇이 나와야 다음으로
              넘어가는가”입니다. 오른쪽 카드에는 포트폴리오 사례를 붙여 두었습니다.
            </p>

            <div className="mt-8 space-y-4">
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
