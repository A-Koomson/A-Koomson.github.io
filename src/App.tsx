import { MotionConfig } from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ThemeProvider } from './hooks/useTheme'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'
import { YouTubePage } from './pages/YouTubePage'

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about">
                <Route index element={<AboutPage />} />
              </Route>
              <Route path="projects">
                <Route index element={<ProjectsPage />} />
                <Route path=":projectId">
                  <Route index element={<ProjectDetailPage />} />
                </Route>
              </Route>
              <Route path="skills">
                <Route index element={<SkillsPage />} />
              </Route>
              <Route path="experience">
                <Route index element={<ExperiencePage />} />
              </Route>
              <Route path="youtube">
                <Route index element={<YouTubePage />} />
              </Route>
              <Route path="contact">
                <Route index element={<ContactPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </ThemeProvider>
  )
}
