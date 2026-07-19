import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar.tsx/NavBar";
import Footer from "../components/shared/Footer/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import ScrollToTopOnRouteChange from "../components/shared/ScrollToTopOnRouteChange";
import { useEffect } from "react";
import AOS from "aos";

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
            <Navbar />
            <main data-scroll-container className="">
                <div className="mx-auto pt-18 max-w-[1920px] px-container ">
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