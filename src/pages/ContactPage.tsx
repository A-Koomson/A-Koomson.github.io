import { Contact } from '../components/Contact'
import { Seo } from '../components/Seo'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact — Alexander Baafi Koomson"
        description="Contact Alexander Baafi Koomson by email, LinkedIn, GitHub, or YouTube."
      />
      <div className="page-header">
        <div className="container">
          <p className="page-header__eyebrow">Contact</p>
          <h1 className="page-header__title">Let's Connect</h1>
          <p className="page-header__description">
            For work, collaboration, or a conversation about systems — email is the most direct path.
          </p>
        </div>
      </div>
      <Contact />
    </>
  )
}
