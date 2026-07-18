import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Login from '../components/login/login-page';
import Register from "../components/register/register-page";
import Navbar from "../components/navbar/navbar"
import { Outlet } from "react-router-dom";
import Home from "../components/home/home-page"
import Products from "../components/products/products";

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
                    <Route path="/home" element={<Home />}/>
                    {/* <Route path="/" element={<Login/>} /> */}
                    <Route path="/products" element={<Products />} />
                </Route>

            </Route>
        </Routes>
    )
}

export default AppRoutes