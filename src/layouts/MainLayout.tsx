import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar.tsx/NavBar";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-white-gray-04 font-urbanist">
            <Navbar />
            <main className="py-12">
                <div className="container mx-auto px-4">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default MainLayout;