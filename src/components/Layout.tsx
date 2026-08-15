import { Outlet } from 'react-router-dom'
import { BackToTop } from './BackToTop'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ScrollProgress } from './ScrollProgress'
import { ScrollToTop } from './ScrollToTop'
import { SkipLink } from './SkipLink'

export function Layout() {
  return (
    <>
      <SkipLink />
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="layout-main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
