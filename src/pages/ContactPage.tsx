import { Contact } from '../components/Contact'
import { PageHeader } from '../components/PageHeader'
import { Seo } from '../components/Seo'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact — Alexander Baafi Koomson"
        description="Contact Alexander Baafi Koomson by email, LinkedIn, GitHub, or YouTube."
      />
      <PageHeader
        eyebrow="Contact"
        title="Let's Build Something"
        description="Have a project, idea, or opportunity? Let's connect."
      />
      <Contact />
    </>
  )
}
