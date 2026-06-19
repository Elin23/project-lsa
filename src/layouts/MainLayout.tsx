import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="py-12">
                <div className="container mx-auto px-4">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default MainLayout;