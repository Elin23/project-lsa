import { lazy, Suspense, useEffect, useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Loader from "./components/feedback/Loader";
import { AppLoadingProvider } from "./context/AppLoadingContext";
import MainLayout from "./layouts/MainLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const EngineeringServicesPage = lazy(
  () => import("./pages/EngineeringServicesPage"),
);
const EngineeringServiceDetailsPage = lazy(
  () => import("./pages/EngineeringServiceDeatilsPage"),
);
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const ProjectDetailsPage = lazy(() => import("./pages/ProjectDetails"));
const EquipmentsPage = lazy(() => import("./pages/EquipmentsPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsAndConditionsPage = lazy(
  () => import("./pages/TermsAndConditionsPage"),
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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
        element: <EngineeringServiceDetailsPage />,
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
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const App = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
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
      <Suspense fallback={<Loader isVisible />}>
        <RouterProvider router={router} />
      </Suspense>

      {showLoader && <Loader isVisible={isLoaderVisible} />}
    </AppLoadingProvider>
  );
};

export default App;
