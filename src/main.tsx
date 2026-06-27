import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";


import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import EngineeringServicesPage from "./pages/EngineeringServicesPage";
import EngineeringServiceDeatilsPage from "./pages/EngineeringServiceDeatilsPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetails";
import Loader from "./components/common/Loader";

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
]);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")!).render(<App />);