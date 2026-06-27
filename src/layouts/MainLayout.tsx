import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar.tsx/NavBar";
import Footer from "../components/shared/Footer/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-white-gray-04 font-urbanist">
            <Navbar />
            <main className="">
                <div className="mx-auto pt-[72px] max-w-[1920px] px-container ">
                    <ScrollToTopButton />
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;