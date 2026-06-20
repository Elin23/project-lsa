import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar.tsx/NavBar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-white-gray-04 font-urbanist">
            <Navbar />
            <main className="py-12">
                <div className="mx-auto max-w-[1440px] px-6 lg-custom:px-12 huge:px-[162px]">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;