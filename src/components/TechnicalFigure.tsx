export type TechnicalFigureVariant =
  | 'architecture'
  | 'services'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'youtube'
  | 'contact'

interface TechnicalFigureProps {
  variant: TechnicalFigureVariant
}

export function TechnicalFigure({ variant }: TechnicalFigureProps) {
  return (
    <div className={`technical-figure technical-figure--${variant}`} aria-hidden="true">
      <svg viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        {variant === 'architecture' ? <ArchitectureMark /> : null}
        {variant === 'services' ? <ServicesMark /> : null}
        {variant === 'skills' ? <SkillsMark /> : null}
        {variant === 'projects' ? <ProjectsMark /> : null}
        {variant === 'experience' ? <ExperienceMark /> : null}
        {variant === 'youtube' ? <YouTubeMark /> : null}
        {variant === 'contact' ? <ContactMark /> : null}
      </svg>
    </div>
  )
}

function ArchitectureMark() {
  return (
    <>
      <rect x="28" y="36" width="304" height="208" rx="8" stroke="currentColor" strokeOpacity="0.22" />
      <rect x="52" y="64" width="88" height="56" rx="6" stroke="#e8b923" />
      <rect x="156" y="64" width="88" height="56" rx="6" stroke="#3a8f4c" />
      <rect x="260" y="64" width="48" height="56" rx="6" stroke="currentColor" strokeOpacity="0.45" />
      <rect x="52" y="160" width="256" height="48" rx="6" stroke="#e8b923" />
      <path d="M96 120v40M200 120v40M284 120v40" stroke="currentColor" strokeOpacity="0.4" />
      <circle cx="96" cy="140" r="3.5" fill="#e8b923" />
      <circle cx="200" cy="140" r="3.5" fill="#3a8f4c" />
      <circle cx="284" cy="140" r="3.5" fill="#e8b923" />
    </>
  )
}

function ServicesMark() {
  return (
    <>
      <circle cx="180" cy="140" r="78" stroke="currentColor" strokeOpacity="0.2" />
      <circle cx="180" cy="140" r="46" stroke="#3a8f4c" />
      <rect x="154" y="114" width="52" height="52" rx="8" stroke="#e8b923" />
      <path d="M180 62v28M180 190v28M102 140h28M230 140h28" stroke="#e8b923" />
      <circle cx="180" cy="62" r="5" fill="#e8b923" />
      <circle cx="180" cy="218" r="5" fill="#3a8f4c" />
      <circle cx="102" cy="140" r="5" fill="#3a8f4c" />
      <circle cx="258" cy="140" r="5" fill="#e8b923" />
    </>
  )
}

function SkillsMark() {
  return (
    <>
      <rect x="48" y="48" width="264" height="36" rx="6" stroke="#e8b923" />
      <rect x="48" y="100" width="196" height="36" rx="6" stroke="#3a8f4c" />
      <rect x="48" y="152" width="232" height="36" rx="6" stroke="currentColor" strokeOpacity="0.45" />
      <rect x="48" y="204" width="148" height="36" rx="6" stroke="#e8b923" />
      <circle cx="300" cy="118" r="18" stroke="#3a8f4c" />
      <circle cx="300" cy="222" r="10" fill="#e8b923" />
    </>
  )
}

function ProjectsMark() {
  return (
    <>
      <rect x="40" y="52" width="120" height="88" rx="8" stroke="#e8b923" />
      <rect x="184" y="52" width="136" height="88" rx="8" stroke="#3a8f4c" />
      <rect x="40" y="160" width="280" height="68" rx="8" stroke="currentColor" strokeOpacity="0.4" />
      <path d="M64 84h72M64 104h48M208 84h88M208 104h56M64 188h232" stroke="currentColor" strokeOpacity="0.35" />
      <circle cx="300" cy="84" r="4" fill="#e8b923" />
    </>
  )
}

function ExperienceMark() {
  return (
    <>
      <path d="M84 48v184" stroke="#e8b923" />
      <circle cx="84" cy="72" r="7" fill="#e8b923" />
      <circle cx="84" cy="140" r="7" fill="#3a8f4c" />
      <circle cx="84" cy="208" r="7" fill="#e8b923" />
      <rect x="116" y="54" width="196" height="36" rx="6" stroke="currentColor" strokeOpacity="0.4" />
      <rect x="116" y="122" width="196" height="36" rx="6" stroke="#3a8f4c" />
      <rect x="116" y="190" width="196" height="36" rx="6" stroke="#e8b923" />
    </>
  )
}

function YouTubeMark() {
  return (
    <>
      <rect x="52" y="64" width="256" height="152" rx="16" stroke="#e8b923" />
      <path d="M154 116l72 36-72 36V116z" fill="#e8b923" />
      <circle cx="84" cy="84" r="5" fill="#3a8f4c" />
      <circle cx="276" cy="196" r="5" fill="#3a8f4c" />
    </>
  )
}

function ContactMark() {
  return (
    <>
      <circle cx="120" cy="140" r="52" stroke="#3a8f4c" />
      <circle cx="240" cy="140" r="52" stroke="#e8b923" />
      <path d="M172 140h16" stroke="currentColor" strokeOpacity="0.45" />
      <circle cx="180" cy="140" r="6" fill="#e8b923" />
      <path d="M104 128c8 18 24 28 40 28s32-10 40-28" stroke="currentColor" strokeOpacity="0.35" />
      <circle cx="120" cy="122" r="4" fill="#3a8f4c" />
      <circle cx="240" cy="122" r="4" fill="#e8b923" />
    </>
  )
}
