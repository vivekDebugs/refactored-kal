import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PortfolioLayout } from '../Apps/Portfolio/layouts'
import { IndustryLayout } from '../Apps/Industry/layouts'
import {
  HomePage as PortfolioHomePage,
  AboutPage as PortfolioAboutPage,
  ResearchPage as PortfolioResearchPage,
  PublicationsPage as PortfolioPublicationsPage,
  TeachingPage as PortfolioTeachingPage,
  ResourcesPage as PortfolioResourcesPage,
  AwardsAndMembershipPage as PortfolioAwardsAndMembershipPage,
  ConferencesAndWorkshopsPage as PortfolioConferencesAndWorkshopsPage,
  ContactPage as PortfolioContactPage,
} from '../Apps/Portfolio/pages'
import {
  HomePage as IndustryHomePage,
  ThesisWritingPage as IndustryThesisWritingPage,
  JournalsAndBookWritingPage as IndustryJournalsAndBookWritingPage,
  AcademicsPage as IndustryAcademicsPage,
  PlagiarismRemovalPage as IndustryPlagiarismRemovalPage,
  WebDevelopmentPage as IndustryWebDevelopmentPage,
  TutorialsPage as IndustryTurorialsPage,
  ResourcesPage as IndustryResourcesPage,
  FAQToolsPage as IndustryFAQToolsPage,
} from '../Apps/Industry/pages'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PortfolioLayout />}>
          <Route index element={<PortfolioHomePage />} />
          <Route path='about' element={<PortfolioAboutPage />} />
          <Route path='research' element={<PortfolioResearchPage />} />
          <Route path='publications' element={<PortfolioPublicationsPage />} />
          <Route path='teaching' element={<PortfolioTeachingPage />} />
          <Route path='resources' element={<PortfolioResourcesPage />} />
          <Route
            path='awards-membership'
            element={<PortfolioAwardsAndMembershipPage />}
          />
          <Route
            path='conferences-workshops'
            element={<PortfolioConferencesAndWorkshopsPage />}
          />
          <Route path='contact' element={<PortfolioContactPage />} />
        </Route>
        <Route path='/industry' element={<IndustryLayout />}>
          <Route index element={<IndustryHomePage />} />
          <Route
            path='thesis-writing'
            element={<IndustryThesisWritingPage />}
          />
          <Route
            path='journals-writing'
            element={<IndustryJournalsAndBookWritingPage />}
          />
          <Route path='academics' element={<IndustryAcademicsPage />} />
          <Route
            path='plagiarism-removal'
            element={<IndustryPlagiarismRemovalPage />}
          />
          <Route
            path='web-development'
            element={<IndustryWebDevelopmentPage />}
          />
          <Route path='tutorials' element={<IndustryTurorialsPage />} />
          <Route path='resources' element={<IndustryResourcesPage />} />
          <Route path='faq-tools' element={<IndustryFAQToolsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
