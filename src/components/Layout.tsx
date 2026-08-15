import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { BackToTop } from './BackToTop'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { PageEnter } from './PageEnter'
import { ScrollProgress } from './ScrollProgress'
import { ScrollToTop } from './ScrollToTop'
import { SkipLink } from './SkipLink'

export function Layout() {
  const location = useLocation()

  return (
    <>
      <SkipLink />
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="layout-main">
        <AnimatePresence mode="wait" initial={false}>
          <PageEnter key={location.pathname}>
            <Outlet />
          </PageEnter>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
