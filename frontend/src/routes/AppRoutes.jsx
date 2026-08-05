import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Login from '../components/login/login-page';
import Register from "../components/register/register-page";
import Navbar from "../components/navbar/navbar"
import { Outlet } from "react-router-dom";
import Home from "../components/home/home-page"
<<<<<<< HEAD
import Products from "../components/products/products";
import Work from "../components/work/work";
import Profile from "../components/profile/profile";

=======
import Profile from "../pages/Profile";
import Products from "../pages/Products";
import PrivateRoute from "./PrivateRoute";
import Footer from "../components/footer/footer";
import Work from "../pages/Work";
>>>>>>> e263cf0 (backend+frontend)
function AppRoutes() {
    return (
        <Routes>
            <Route element={
                <>
                    <Navbar />
                    <Outlet />
                    
                </>
            }>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={
                    <Products />}
                    />
                <Route path="/profile" element={

                    <PrivateRoute>
                        <Profile />
                       
                        <Footer />
                    </PrivateRoute>
                } />
                <Route path="/work" element={<PrivateRoute><Work /></PrivateRoute>} />
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/" element={<Login/>} /> */}
                    <Route path="/products" element={<Products />} />
                    <Route path="/work" element = {< Work/>} />
                    <Route path="/profile" element={<Profile />} />
                </Route>

            </Route>
        </Routes>
    )
}

export default AppRoutes