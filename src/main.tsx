import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "aos/dist/aos.css";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import EngineeringServicesPage from "./pages/EngineeringServicesPage";
import EngineeringServiceDeatilsPage from "./pages/EngineeringServiceDeatilsPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetails";
import EquipmentsPage from "./pages/EquipmentsPage";

import Loader from "./components/common/Loader";
import GlobalImageOptimizer from "./components/common/GlobalImageOptimizer";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <EngineeringServicesPage />,
      },
      {
        path: "services/:slug",
        element: <EngineeringServiceDeatilsPage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetailsPage />,
      },
      {
        path: "careers",
        element: <CareersPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "equipment",
        element: <EquipmentsPage />,
      },
    ],
  },
]);

function App() {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoaderVisible(false);
    }, 2200);

    const removeLoaderTimer = window.setTimeout(() => {
      setShowLoader(false);
    }, 2900);

    return () => {
      window.clearTimeout(loadingTimer);
      window.clearTimeout(removeLoaderTimer);
    };
  }, []);

  return (
    <>
      <GlobalImageOptimizer />

      <RouterProvider router={router} />

      {showLoader && <Loader isVisible={isLoaderVisible} />}
    </>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element was not found.");
}

createRoot(rootElement).render(<App />);