import { PageHeader } from '../components/PageHeader'
import { Seo } from '../components/Seo'
import { Services } from '../components/Services'

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services — Alexander Baafi Koomson"
        description="Software engineering services from Alexander Baafi Koomson, including backend development, APIs, databases, web applications, and system design."
      />
      <PageHeader
        eyebrow="Services"
        title="What I Build"
        description="Areas of software engineering I can help with — practical systems, not an agency pitch."
        figure="services"
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Services />
        </div>
      </section>
    </>
  )
}
