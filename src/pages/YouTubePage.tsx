import { PageHeader } from '../components/PageHeader'
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
      <PageHeader
        eyebrow="YouTube"
        title={youtubeBrand.name}
        description={youtubeBrand.tagline}
        figure="youtube"
      />
      <YouTube />
    </>
  )
}
