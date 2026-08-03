import { useEffect, useState } from "react";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

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
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import NotFoundPage from "./pages/NotFoundPage";

import Loader from "./components/feedback/Loader";
import { AppLoadingProvider } from "./context/AppLoadingContext";

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
        path: "projects/:slug",
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
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditionsPage />,
      },

      // أي رابط غير موجود سيعرض صفحة 404
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const App = () => {
  const [isLoaderVisible, setIsLoaderVisible] =
    useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoaderVisible(false);
    }, 2200);

    const removeLoaderTimer = window.setTimeout(() => {
      setShowLoader(false);
      setIsAppReady(true);
    }, 2900);

    return () => {
      window.clearTimeout(loadingTimer);
      window.clearTimeout(removeLoaderTimer);
    };
  }, []);

  return (
    <AppLoadingProvider isAppReady={isAppReady}>
      <RouterProvider router={router} />

      {showLoader && (
        <Loader isVisible={isLoaderVisible} />
      )}
    </AppLoadingProvider>
  );
};

export default App;