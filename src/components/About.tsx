const snapshot = [
  { label: "Focus", value: "AI × Commerce" },
  { label: "Experience", value: "서비스기획·PM 약 3년" },
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
            <span className="text-accent">AI를 실행력으로 연결하는 PM</span>
          </h2>
          <p className="mt-6 text-lg font-normal leading-relaxed text-ink-secondary md:text-xl">
            단순히 화면을 설계하는 것보다, 서비스가 실제로{" "}
            <span className="font-semibold text-ink">
              어떻게 운영되고 연결되는지
            </span>
            를 먼저 고민합니다. 상품·주문·정산·광고·운영 등 다양한 흐름 속에서{" "}
            <span className="font-semibold text-ink">
              사용자 경험과 비즈니스 구조
            </span>
            가 자연스럽게 이어질 수 있도록 설계합니다.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-6 text-base font-normal leading-relaxed text-ink-secondary lg:col-span-3 md:text-[17px]">
            <p>
              <span className="font-semibold text-ink">
                약 3년간 서비스 기획 및 PM 경험
              </span>
              을 쌓으며, “무엇을 만들 것인가”보다{" "}
              <span className="font-semibold text-ink">
                “어떤 구조가 서비스와 운영을 더 효율적으로 만드는가”
              </span>
              에 집중해왔습니다. 복잡한 문제를 빠르게 구조화하고,{" "}
              <span className="font-semibold text-ink">
                실행 가능한 단위로 정리
              </span>
              해 프로젝트를 안정적으로 리딩하는 데 강점이 있습니다.
            </p>

            <p>
              특히 AI를 단순한 보조 툴이 아니라,{" "}
              <span className="font-semibold text-ink">
                업무 방식 자체를 개선하는 실행 도구
              </span>
              로 활용합니다. Cursor·V0·Claude·GPT 등을 활용해
              와이어프레임·프로토타입·스토리보드·정책 설계까지의 과정을
              빠르게 구조화하고,{" "}
              <span className="font-semibold text-ink">
                기존에 수주 단위로 소요되던 기획 업무를 단기간 내 실행 가능한 수준
              </span>
              으로 구체화해왔습니다.
            </p>

            <p>
              또한 빠른 생산 속도에만 집중하지 않고,{" "}
              <span className="font-semibold text-ink">
                예외 케이스·운영 정책·사용자 흐름
              </span>
              까지 함께 고려하여 실제 서비스 환경에서{" "}
              <span className="font-semibold text-ink">
                안정적으로 운영 가능한 구조
              </span>
              를 설계합니다.
            </p>

            <p>
              캐나다 고등학교인 Bodwell High School과{" "}
              동국대학교 영어통번역학과를 거쳐 영어 비즈니스 커뮤니케이션에
              능숙하며, 협업 환경에서도 다양한 직군과의{" "}
              <span className="font-semibold text-ink">
                원활한 커뮤니케이션
              </span>
              을 통해 프로젝트를{" "}
              <span className="font-semibold text-ink">
                안정적으로 조율하고 운영
              </span>
              할 수 있습니다.
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
                어떤 팀에서도 바로 실무 투입 가능한{" "}
                <span className="font-semibold text-ink">
                  구조·AI·협업
                </span>{" "}
                기준으로 일합니다.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
