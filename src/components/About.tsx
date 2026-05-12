const competencies = [
  {
    title: "AX 기반 업무 프로세스 혁신",
    body: "기존 업무 방식을 그대로 유지한 채 AI를 붙이는 방식보다, 업무 흐름 자체를 다시 설계하는 데 집중합니다. PiMS Partners 프로젝트에서는 문서 중심 협업을 화면 중심 협업으로 바꾸고, 직군별로 순차 진행하던 플로우를 동시 검증 구조로 전환해 기획·디자인·개발 기간을 모두 단축했습니다. 화면과 정책 문서를 1:1로 매핑해 기능·예외·데이터 흐름을 함께 검증하면서, 커뮤니케이션 비용과 재논의 발생률을 줄였습니다.",
  },
  {
    title: "운영 구조 중심 문제 해결",
    body: "문제가 발생했을 때 단순 현상보다 구조적인 원인을 먼저 분석합니다. 일정 지연이나 기능 해석 차이가 반복될 경우, 추가 회의로 해결하기보다 왜 같은 논의가 반복되는지·어디서 해석 차이가 생기는지·어떤 산출 구조가 재논의를 유발하는지를 먼저 파악합니다. 덕분에 단순 기능 단위가 아니라 운영 흐름과 협업 구조 관점에서 문제를 해결할 수 있었습니다.",
  },
  {
    title: "실행 중심 커뮤니케이션",
    body: "PM은 많은 사람과 이야기하는 직무가 아니라, 같은 방향으로 이해하게 만드는 직무라고 생각합니다. 개발자·디자이너·운영·마케팅 등 직군마다 중요하게 보는 관점이 다르다는 점을 경험했고, 문서를 작성할 때도 왜 필요한 기능인지·어떤 운영 문제를 해결하는지·어떤 예외가 있는지·실제 운영 흐름에서 어떻게 사용되는지를 중심으로 구조화해 전달합니다.",
  },
];

const personality = [
  {
    label: "장점",
    headline: "구조적으로 사고하고 끝까지 실행합니다",
    body: "복잡한 문제를 구조화해 실행 가능한 형태로 정리하는 데 강점이 있습니다. 문제를 단순한 불편함으로 넘기지 않고, 왜 이런 구조가 만들어졌는지·어디서 비효율이 발생하는지·어떻게 바꾸면 더 빠르게 합의할 수 있는지를 지속적으로 고민합니다. 새로운 도구와 기술을 빠르게 실무에 적용하는 실행력이 강하며, AI 기반 워크플로우도 직접 도입해 생산성을 개선해왔습니다.",
  },
  {
    label: "단점",
    headline: "결과에 대한 책임감이 큰 편입니다",
    body: "목표를 중요하게 생각하는 만큼 기대한 결과가 나오지 않을 경우 스스로 많은 책임감을 느낍니다. 다만 최근에는 결과 자체에만 집중하기보다, 데이터와 프로세스를 기반으로 원인을 분석하고 개선 방향을 찾는 방식으로 사고를 전환하고 있습니다. 지속 가능한 업무 수행을 위해 운동과 루틴 관리를 병행하며 컨디션을 균형 있게 관리합니다.",
  },
];

type SectionProps = {
  index: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

function Section({ index, eyebrow, title, children }: SectionProps) {
  return (
    <article className="reveal mt-20 md:mt-24">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-accent px-4 py-1.5 text-sm font-bold tracking-[0.18em] text-white">
          {index}
        </span>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent md:text-base">
          {eyebrow}
        </p>
      </div>

      <h3 className="mt-6 text-3xl font-bold leading-snug tracking-tight text-ink md:text-4xl">
        {title}
      </h3>

      <div className="mt-8">{children}</div>
    </article>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-b border-slate-200/80 bg-surface"
    >
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            About me
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl md:leading-tight">
            운영 구조와 협업 흐름을
            <br />
            <span className="text-accent">
              AX 기반으로 재설계하는 PM 김유정
            </span>
            입니다.
          </h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-secondary md:text-lg">
            <p>
              저는 단순히 기능을 정의하는 PM이 아니라,{" "}
              <span className="font-semibold text-ink">
                복잡한 운영 구조 속에서 문제의 본질을 찾고 실행 가능한 흐름으로
                재설계
              </span>
              하는 프로덕트 매니저입니다.
            </p>

            <p>
              마케팅 PM으로 커리어를 시작하며 프로모션 운영, 재고 관리, 매출
              분석, 일정 조율 등 제품 운영 전반을 경험했습니다. 이후 서비스
              기획·프로덕트 업무를 수행하며 점차{" "}
              <span className="font-semibold text-ink">
                “무엇을 만들 것인가”보다 “어떻게 더 빠르고 정확하게 협업할 수
                있는가”
              </span>
              에 집중하게 되었습니다.
            </p>

            <p>
              특히 최근에는 Cursor·VS Code·Claude·Notion 등 AI 기반 도구를 단순
              보조 툴이 아닌{" "}
              <span className="font-semibold text-ink">
                실제 업무 구조를 바꾸는 AX 워크플로우
              </span>
              로 활용하고 있습니다.
            </p>
          </div>
        </div>

        <Section
          index="01"
          eyebrow="목표"
          title="더 빠르게 합의되고, 실제로 구현되는 프로덕트를 만들고 싶었습니다."
        >
          <div className="space-y-6 text-base leading-relaxed text-ink-secondary md:text-lg">
            <p>
              초기 커리어에서는 이미 존재하는 제품과 프로모션을 운영하며 성과를
              만드는 역할을 수행했습니다. 실제로 BSK(더바디샵) 재직 당시 화이트
              머스크 프로모션을 통해{" "}
              <span className="font-semibold text-ink">
                향수 카테고리 매출 약 5천만 원 상승
              </span>
              이라는 성과를 만들었습니다.
            </p>

            <p>
              하지만 경험이 쌓일수록 더 흥미를 느낀 부분은{" "}
              <span className="font-semibold text-ink">
                “구조를 개선하는 일”
              </span>
              이었습니다. 왜 같은 기능이 반복 수정되는지, 왜 회의는 길어지는데
              결정은 늦어지는지, 왜 문서를 많이 만들수록 오히려 구현 오차가
              커지는지를 고민했고, PM의 핵심 역할은 단순 일정 관리가 아니라{" "}
              <span className="font-semibold text-ink">
                협업 구조를 설계하는 것
              </span>
              이라는 결론에 도달했습니다.
            </p>

            <p>
              저는 이러한 변화 속에서{" "}
              <span className="font-semibold text-ink">
                AX 기반 프로세스 혁신과 빠른 실행력
              </span>
              을 강점으로 가진 PM으로 성장하고 싶습니다.
            </p>
          </div>
        </Section>

        <Section
          index="02"
          eyebrow="핵심 역량"
          title="AX 기반 프로세스 혁신, 구조적 문제 해결, 실행 중심 커뮤니케이션"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {competencies.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
              >
                <p className="text-xs font-bold tracking-[0.16em] text-accent">
                  0{i + 1}
                </p>
                <h4 className="mt-3 text-lg font-bold leading-snug text-ink md:text-xl">
                  {item.title}
                </h4>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          index="03"
          eyebrow="성격의 장단점"
          title="구조적 사고와 책임감, 두 축으로 일합니다."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {personality.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
              >
                <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-accent">
                  {item.label}
                </span>
                <h4 className="mt-4 text-lg font-bold leading-snug text-ink md:text-xl">
                  {item.headline}
                </h4>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          index="04"
          eyebrow="마무리"
          title="협업 구조를 설계해 비즈니스 임팩트를 만드는 PM이 되겠습니다."
        >
          <div className="space-y-6 text-base leading-relaxed text-ink-secondary md:text-lg">
            <p>
              저는 단순히 기능을 정의하는 PM이 아니라,{" "}
              <span className="font-semibold text-ink">
                복잡한 협업 구조 속에서 더 빠르게 합의되고 정확하게 실행될 수
                있는 흐름
              </span>
              을 만드는 PM이 되고자 합니다.{" "}
              <span className="font-semibold text-ink">
                AI와 AX 기반의 업무 혁신
              </span>
              을 통해 조직의 실행 속도를 높이고, 실제 비즈니스 임팩트를 만드는
              프로덕트 매니저로 성장하겠습니다.
            </p>
          </div>
        </Section>
      </div>
    </section>
  );
}
