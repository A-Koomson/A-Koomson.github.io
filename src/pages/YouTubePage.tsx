import { Seo } from '../components/Seo'
import { YouTube } from '../components/YouTube'
import { getProfile } from '../services/content'

export function YouTubePage() {
  const { youtubeBrand } = getProfile()

  return (
    <>
      <Seo
        title={`${youtubeBrand.name} — Alexander Baafi Koomson`}
        description={youtubeBrand.description}
      />
      <div className="page-header">
        <div className="container">
          <p className="page-header__eyebrow">Creator</p>
          <h1 className="page-header__title">{youtubeBrand.name}</h1>
          <p className="page-header__description">{youtubeBrand.tagline}</p>
        </div>
      </div>
      <YouTube />
    </>
  )
}
