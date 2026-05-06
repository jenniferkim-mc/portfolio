import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";

type Props = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  detail?: string;
  /** 강조 카드용: 기간 비교 한 줄 (예: 기존 약 2개월 →) */
  beforeCaption?: string;
  className?: string;
  /** 성과 숫자 타이포 확대 */
  emphasized?: boolean;
};

export function AnimatedStat({
  label,
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  detail,
  beforeCaption,
  className = "",
  emphasized = false,
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({
    rootMargin: "0px 0px -5% 0px",
    threshold: 0.2,
  });
  const display = useCountUp({
    end: value,
    durationMs: 1600,
    decimals,
    startWhen: inView,
  });

  const sizeClass = emphasized
    ? "text-4xl font-bold md:text-5xl"
    : "text-3xl font-semibold md:text-4xl";

  return (
    <div
      ref={ref}
      className={`rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card ${className}`.trim()}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-ink-subtle">
        {label}
      </p>
      {beforeCaption ? (
        <p className="mt-2 text-sm font-medium text-ink-secondary">{beforeCaption}</p>
      ) : null}
      <p
        className={`font-mono tracking-tight text-ink ${beforeCaption ? "mt-2" : "mt-3"} ${sizeClass}`}
      >
        <span className="text-accent">{prefix}</span>
        {display}
        <span className="text-accent">{suffix}</span>
      </p>
      {detail ? (
        <p className="mt-2 text-sm text-ink-secondary">{detail}</p>
      ) : null}
    </div>
  );
}
