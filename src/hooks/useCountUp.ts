import { useEffect, useState } from "react";

type Args = {
  end: number;
  durationMs?: number;
  decimals?: number;
  startWhen: boolean;
};

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function useCountUp({
  end,
  durationMs = 1400,
  decimals = 0,
  startWhen,
}: Args) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhen) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = easeOutCubic(t);
      setValue(end * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
      else setValue(end);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, durationMs, startWhen]);

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
}
