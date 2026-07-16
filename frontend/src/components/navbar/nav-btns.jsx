import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { MdOutlinePersonAddAlt } from "react-icons/md";




function NavBtns() {
    const location = useLocation();

    const isAuthPage = location.pathname === "/" || location.pathname === "/register"

    return (
        <div className="nav-btns flex items-center gap-3">
            {!isAuthPage && (
                <>
                    <div className="email-red relative inline-block">
                        <MdOutlineMailOutline size={35} className="text-emerald-900" />
                        <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                    </div>
                    <div className="language-btn flex items-center">
                        <HiOutlineGlobeAsiaAustralia size={33} className="text-emerald-900" />
                        <p>En</p>
                    </div>
                    <Link to="/">
                        <button className="rounded-lg bg-emerald-900 text-white py-2 px-5 hover:bg-transparent hover:text-black border border-emerald-900 ">Log Out</button>
                    </Link>           
                </>
            )}

            {location.pathname === "/register" && (
                <Link to="/">
                    <button className="py-2 px-3 rounded-lg bg-emerald-900 text-white hover:text-black hover:border hover:bg-transparent flex items-center justify-center gap-1">
                        <CiLogin size={25}/>
                        Login
                    </button>
                </Link>
            )}

            {location.pathname === "/" && (
                <Link to="/register">
                    <button className="rounded-lg px-3 py-2 bg-emerald-900 text-white hover:border hover:bg-transparent hover:text-black flex items-center justify-center gap-1">
                        <MdOutlinePersonAddAlt size={25} />
                        Create Wallet
                    </button>
                </Link>
            )}
        </div>
    )
}

export default NavBtns