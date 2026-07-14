import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Login from '../components/login/login-page';
import Register from "../components/register/register-page";
import Navbar from "../components/navbar/navbar"
import { Outlet } from "react-router-dom";
// import Home from "../components/home/home-page"

function AppRoutes() {
    return (
        <Routes>
            <Route element={
                <>
                    <Navbar />
                    <Outlet />
                </>
            }>

                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />}/>
                <Route element={<MainLayout />}>
                        {/* <Route path="/home" element={<Home />}/> */}
                </Route>

            </Route>
        </Routes>
    )
}

export default AppRoutes