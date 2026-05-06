import { useRevealClass } from "./hooks/useRevealClass";

import { caseStudies } from "./data/caseStudies";
import { experiences, education } from "./data/resume";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { CaseStudies } from "./components/CaseStudies";
import { ProductThinking } from "./components/ProductThinking";
import { Footer } from "./components/Footer";

export default function App() {
  const mainRef = useRevealClass();

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <main ref={mainRef}>
        <Hero />
        <About />

        {/* 경력 */}
        <Experience items={experiences} />

        {/* 학력 */}
        <Education items={education} />

        {/* 프로젝트 */}
        <CaseStudies items={caseStudies} />

        <ProductThinking />
      </main>

      <Footer />
    </div>
  );
}
