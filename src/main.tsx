import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.tsx'
import HomePage from './pages/HomePage.tsx'
import CareersPage from './pages/CareersPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import EngineeringServicesPage from './pages/EngineeringServicesPage.tsx'
import ProjectPage from './pages/ProjectPage.tsx'
import ProjectDetailsPage from './pages/ProjectDetails.tsx'
import EngineeringServiceDeatilsPage from './pages/EngineeringServiceDeatilsPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <EngineeringServicesPage /> },
      { path: "services/:id", element: <EngineeringServiceDeatilsPage /> },
      { path: "projects", element: <ProjectPage /> },
      { path: "projects/:id", element: <ProjectDetailsPage /> },
      { path: "careers", element: <CareersPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
