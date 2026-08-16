import { EngineeringGrid } from './EngineeringGrid'

interface BandDecorProps {
  patternId: string
}

export function BandDecor({ patternId }: BandDecorProps) {
  return (
    <>
      <span className="page-header__shape page-header__shape--yellow" aria-hidden="true" />
      <span className="page-header__shape page-header__shape--lime" aria-hidden="true" />
      <EngineeringGrid patternId={patternId} />
      <div className="band-waves band-waves--top" aria-hidden="true">
        <svg viewBox="0 0 1440 88" preserveAspectRatio="none">
          <path
            className="hero__wave hero__wave--yellow"
            d="M0 0 L1440 0 L1440 36 C 1120 84 860 12 580 40 C 300 68 120 18 0 44 Z"
          />
          <path
            className="hero__wave hero__wave--green"
            d="M0 0 L1440 0 L1440 22 C 1080 64 780 8 480 30 C 220 50 80 12 0 28 Z"
          />
        </svg>
      </div>
    </>
  )
}

export function BandWavesBottom() {
  return (
    <div className="page-header__waves" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          className="hero__wave hero__wave--yellow"
          d="M0 58 C 260 110 520 8 780 46 C 1040 84 1240 16 1440 52 L1440 120 L0 120 Z"
        />
        <path
          className="hero__wave hero__wave--green"
          d="M0 78 C 280 36 540 108 820 70 C 1080 34 1260 94 1440 64 L1440 120 L0 120 Z"
        />
        <path
          className="hero__wave hero__wave--paper"
          d="M0 98 C 320 76 580 116 880 94 C 1140 74 1300 108 1440 90 L1440 120 L0 120 Z"
        />
      </svg>
    </div>
  )
}
