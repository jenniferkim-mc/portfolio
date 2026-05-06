const snapshot = [
  { label: "Focus", value: "AI × Commerce" },
  { label: "Experience", value: "서비스기획·PM 3년+" },
  { label: "Current", value: "Addeep · Project Leader" },
  { label: "Language", value: "English fluent" },
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-b border-slate-200/80 bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="reveal max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            About me
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl md:leading-tight">
            구조를 먼저 보는 기획자,
            <br />
            <span className="text-accent">지표로 말하는 PM</span>
          </h2>
          <p className="mt-6 text-lg font-normal leading-relaxed text-ink-secondary md:text-xl">
            화면부터 그리지 않고{" "}
            <span className="font-semibold text-ink">
              상품·주문·정산·광고가 만나는 지점
            </span>
            부터 봅니다. 데이터로 병목을 고정하고, 실행 가능한 범위로 쪼갠 뒤,
            이해관계자가 같은 그림을 보도록 설득합니다.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-6 text-base font-normal leading-relaxed text-ink-secondary lg:col-span-3 md:text-[17px]">
            <p>
              <span className="font-semibold text-ink">
                서비스 기획과 PM 경력 3년 이상
              </span>
              을 쌓으며, “무엇을 만들까”보다{" "}
              <span className="font-semibold text-ink">
                “어떤 구조가 매출과 운영을 지탱하는가”
              </span>
              에 더 많은 시간을 씁니다. 현재{" "}
              <span className="font-semibold text-ink">
                Addeep Product Planning Center
              </span>
              에서{" "}
              <span className="font-semibold text-ink">Project Leader</span>로,
              PiMS Partners{" "}
              <span className="font-semibold text-ink">커머스 Admin</span>의
              상품·운영·거래/정산/검수 구조를 설계합니다.
            </p>
            <p>
              AI는 속도를 위한 도구가 아니라{" "}
              <span className="font-semibold text-ink">
                합의와 산출물의 표준을 바꾸는 레버리지
              </span>
              로 씁니다. Cursor·GPT로 프로토타입과 스토리보드를 앞세우되, 정책과
              예외는 사람이 책임지는 선에서 AX를 설계합니다.
            </p>
            <p>
              <span className="font-semibold text-ink">
                Bodwell High School(캐나다)
              </span>
              과{" "}
              <span className="font-semibold text-ink">
                동국대 영어통번역학과
              </span>
              를 거쳐 영어 비즈니스 커뮤니케이션에 익숙합니다. 글로벌 스택·문서·
              미팅 환경에서도{" "}
              <span className="font-semibold text-ink">
                실행력과 설득력
              </span>
              으로 바로 맞춥니다.
            </p>
          </div>

          <aside className="lg:col-span-2">
            <div className="sticky top-28 rounded-3xl border border-slate-200/90 bg-white p-7 shadow-hero-card md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-subtle">
                At a glance
              </p>
              <dl className="mt-6 space-y-5">
                {snapshot.map((row) => (
                  <div
                    key={row.label}
                    className="border-b border-slate-100 pb-5 last:border-0 last:pb-0"
                  >
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-subtle">
                      {row.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-ink md:text-base">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 rounded-2xl border border-accent/15 bg-accent-soft/60 px-4 py-3 text-center text-xs font-medium leading-relaxed text-ink-secondary">
                대기업·스케일 팀에서도 바로 실무 투입 가능한{" "}
                <span className="font-semibold text-ink">구조·지표·협업</span>{" "}
                기준으로 일합니다.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
