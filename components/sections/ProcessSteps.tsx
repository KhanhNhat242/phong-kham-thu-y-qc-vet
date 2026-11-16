'use client'

import { useCallback, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import type { Service } from '@/data/services'
import { noOrphan } from '@/lib/typography'
import { ServiceIcon } from '@/components/ui/Icons'

/**
 * Quy trình 5 bước (REQUIREMENTS 6.2 – ngoại lệ Quy trình), bố cục theo ảnh mẫu khách gửi:
 * - Desktop (lg+): khối tiêu đề ở góc trên trái; đường cong đi lên từ dưới trái tới trên phải,
 *   nút nằm trên đường, chữ mô tả ngay dưới mỗi nút, số lớn mờ phía sau; vòng tròn nhạt ở nền phải.
 *   Hover / focus / chạm vào bước nào thì thanh tiến trình chạy từ đầu tới bước đó.
 * - Dưới lg: tiêu đề + dòng thời gian dọc.
 */

const VB_W = 1200
const VB_H = 640

type Point = { x: number; y: number }
type Step = Pick<Service, 'slug' | 'shortName' | 'step' | 'icon'>

/** Vị trí 5 nút: đi lên dần từ trái sang phải */
const NODE_POINTS: Point[] = [
  { x: 110, y: 470 },
  { x: 340, y: 395 },
  { x: 570, y: 300 },
  { x: 800, y: 200 },
  { x: 1010, y: 95 },
]

function buildPath(points: Point[]): string {
  const start = { x: -40, y: 380 }
  const end = { x: VB_W + 40, y: 70 }
  const all = [start, ...points, end]
  let d = `M ${start.x} ${start.y}`
  for (let i = 1; i < all.length; i++) {
    const a = all[i - 1]
    const b = all[i]
    const dx = (b.x - a.x) / 2
    d += ` C ${a.x + dx} ${a.y} ${b.x - dx} ${b.y} ${b.x} ${b.y}`
  }
  return d
}

export function ProcessSteps({ steps, header }: { steps: Step[]; header?: ReactNode }) {
  const [active, setActive] = useState(0)
  const reset = useCallback(() => setActive(0), [])

  const points = useMemo<Point[]>(
    () => steps.map((_, i) => NODE_POINTS[i] ?? { x: ((i + 0.5) / steps.length) * VB_W, y: VB_H / 2 }),
    [steps],
  )
  const d = useMemo(() => buildPath(points), [points])

  return (
    <>
      <WaveDesktop
        steps={steps}
        points={points}
        d={d}
        active={active}
        onActivate={setActive}
        onLeave={reset}
        header={header}
      />
      <div className="lg:hidden">
        {header && <div className="mb-10">{header}</div>}
        <TimelineMobile steps={steps} active={active} onActivate={setActive} />
      </div>
    </>
  )
}

type StepsProps = {
  steps: Step[]
  active: number
  onActivate: (i: number) => void
}

function WaveDesktop({
  steps,
  points,
  d,
  active,
  onActivate,
  onLeave,
  header,
}: StepsProps & { points: Point[]; d: string; onLeave: () => void; header?: ReactNode }) {
  const pathRef = useRef<SVGPathElement>(null)
  const [geom, setGeom] = useState<{ total: number; at: number[] } | null>(null)

  // Độ dài đường cong tới từng nút (tính 1 lần trên client)
  useLayoutEffect(() => {
    const path = pathRef.current
    if (!path) return
    const total = path.getTotalLength()
    const at = points.map((p) => {
      let lo = 0
      let hi = total
      for (let k = 0; k < 30; k++) {
        const mid = (lo + hi) / 2
        if (path.getPointAtLength(mid).x < p.x) lo = mid
        else hi = mid
      }
      return (lo + hi) / 2
    })
    setGeom({ total, at })
  }, [points])

  const dashOffset = geom ? geom.total - geom.at[active] : VB_W * 3

  return (
    <div className="relative isolate hidden h-[640px] lg:block" onMouseLeave={onLeave}>
      {/* Vòng tròn nhạt trang trí ở nền bên phải (theo ảnh mẫu) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-[14%] -z-10 aspect-square w-[46%] -translate-y-1/2 rounded-full bg-surface"
      />

      {/* Khối tiêu đề góc trên trái */}
      {header && <div className="absolute top-0 left-0 z-10 w-[42%] xl:w-[38%]">{header}</div>}

      <svg
        aria-hidden="true"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 size-full overflow-visible"
      >
        <path d={d} fill="none" stroke="var(--qc-line)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        <path
          ref={pathRef}
          d={d}
          fill="none"
          stroke="var(--qc-primary)"
          strokeWidth={4}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          strokeDasharray={geom ? geom.total : VB_W * 3}
          strokeDashoffset={dashOffset}
          className="transition-[stroke-dashoffset] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        />
      </svg>

      <ol className="absolute inset-0">
        {steps.map((s, i) => {
          const p = points[i]
          const reached = i <= active
          const isActive = i === active
          return (
            <li
              key={s.slug}
              className="absolute"
              style={{ left: `${(p.x / VB_W) * 100}%`, top: `${(p.y / VB_H) * 100}%` }}
            >
              {/* Nút trên đường cong */}
              <button
                type="button"
                onMouseEnter={() => onActivate(i)}
                onFocus={() => onActivate(i)}
                onClick={() => onActivate(i)}
                aria-pressed={isActive}
                aria-label={`Bước ${i + 1}: ${s.shortName}`}
                className={`absolute top-0 left-0 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl transition-[background-color,color,transform,box-shadow] duration-300 ${
                  reached ? 'bg-primary text-white' : 'bg-white text-primary'
                } ${isActive ? 'scale-110 shadow-soft-lg' : 'shadow-soft'}`}
              >
                <ServiceIcon name={s.icon} className="size-6" />
              </button>

              {/* Chữ ngay dưới nút, căn trái theo ảnh mẫu; số lớn mờ phía sau bên phải */}
              <div onMouseEnter={() => onActivate(i)} className="absolute top-12 -left-7 isolate w-[210px]">
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-16 -right-4 -z-10 text-[150px] leading-none font-black tabular-nums transition-colors duration-300 select-none ${
                    isActive ? 'text-primary/[0.1]' : 'text-primary/[0.05]'
                  }`}
                >
                  {i + 1}
                </span>
                <h3
                  className={`text-lg leading-snug font-bold transition-colors duration-300 ${
                    reached ? 'text-primary' : 'text-ink'
                  }`}
                >
                  {s.shortName}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{noOrphan(s.step)}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

function TimelineMobile({ steps, active, onActivate }: StepsProps) {
  const fill = steps.length > 1 ? (active / (steps.length - 1)) * 100 : 0
  return (
    <ol className="relative lg:hidden">
      {/* Đường dọc + phần đã chạy */}
      <span aria-hidden="true" className="absolute top-7 bottom-7 left-7 w-1 -translate-x-1/2 rounded-full bg-line" />
      <span
        aria-hidden="true"
        className="absolute top-7 left-7 w-1 -translate-x-1/2 rounded-full bg-primary transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ height: `calc((100% - 3.5rem) * ${fill / 100})` }}
      />
      {steps.map((s, i) => {
        const reached = i <= active
        return (
          <li key={s.slug} className="relative flex gap-4 py-3">
            <button
              type="button"
              onClick={() => onActivate(i)}
              onFocus={() => onActivate(i)}
              aria-pressed={i === active}
              aria-label={`Bước ${i + 1}: ${s.shortName}`}
              className={`relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl transition-colors duration-300 ${
                reached ? 'bg-primary text-white' : 'bg-white text-primary shadow-soft'
              }`}
            >
              <ServiceIcon name={s.icon} className="size-6" />
            </button>
            <div className="pt-1" onClick={() => onActivate(i)}>
              <p className="text-sm font-bold text-accent-dark tabular-nums">Bước {i + 1}</p>
              <h3 className="text-base leading-snug font-bold text-ink">{s.shortName}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-muted">{noOrphan(s.step)}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
