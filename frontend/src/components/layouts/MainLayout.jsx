import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function MainLayout(){
    return(
        <div className="flex flex-col min-h-screen bg-[f0f7ff]">
            <Navbar />

            <main className="flex-grow pb-20 bg-[f0f7ff]">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout