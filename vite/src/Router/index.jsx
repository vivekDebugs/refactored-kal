import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PortfolioLayout } from '../Apps/Portfolio/layouts'
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
      </Routes>
    </BrowserRouter>
  )
}

export default Router
