import { Outlet } from "react-router-dom";

import ScrollToTopButton from "../components/navigation/ScrollToTopButton";
import ScrollToTopOnRouteChange from "../components/shared/ScrollToTopOnRouteChange";
import { useEffect } from "react";
import AOS from "aos";
import ScrollToSection from "../services/ScrollToSection";
import FloatingTabs from "../components/shared/FloatingTabs";
import Navbar from "../components/navigation/Navbar/NavBar";
import Footer from "../components/navigation/Footer";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white-gray-04 font-urbanist">
      <ScrollToSection />
      <FloatingTabs
        heroId="hero"
        footerId="footer"
        phoneNumber="+964 770 000 0000"
        whatsappNumber="9647700000000"
        email="info@lsa-iq.com"
      />
      <Navbar />
      <main data-scroll-container className="">
        <div className="mx-auto max-w-[1920px] px-container ">
          <ScrollToTopOnRouteChange />
          <Outlet />
          <ScrollToTopButton />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
