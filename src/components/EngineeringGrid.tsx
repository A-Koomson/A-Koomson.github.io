interface EngineeringGridProps {
  patternId?: string
}

export function EngineeringGrid({ patternId = 'ak-grid' }: EngineeringGridProps) {
  return (
    <div className="engineering-grid" aria-hidden="true">
      <svg className="engineering-grid__svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={patternId} width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill={`url(#${patternId})`} />
        <g className="engineering-grid__nodes" fill="currentColor">
          <circle cx="180" cy="140" r="2.4" />
          <circle cx="420" cy="220" r="2.4" />
          <circle cx="760" cy="160" r="2.4" />
          <circle cx="980" cy="280" r="2.4" />
          <circle cx="240" cy="520" r="2.4" />
          <circle cx="640" cy="480" r="2.4" />
          <circle cx="900" cy="600" r="2.4" />
        </g>
        <g className="engineering-grid__lines" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M180 140 L420 220 L760 160 L980 280" />
          <path d="M240 520 L640 480 L900 600" />
          <path d="M420 220 L640 480" />
        </g>
      </svg>
    </div>
  )
}
