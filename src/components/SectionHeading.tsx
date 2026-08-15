interface SectionHeadingProps {
  index: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  titleId?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  titleId,
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="section-heading__index">{index}</p>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId} className="section-heading__title">
        {title}
      </h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </header>
  )
}
