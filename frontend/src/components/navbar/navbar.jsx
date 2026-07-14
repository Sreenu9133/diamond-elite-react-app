import { IoDiamondOutline } from "react-icons/io5";
// import Navlinks from "./nav-links";
import NavBtns from "./nav-btns";

function Navbar() {
    return (
        <nav className="flex items-center px-5 py-4 w-full justify-between shadow-2xl border-b border-emerald-950 bg-white">

            <div className="logo flex items-center gap-1">
                <IoDiamondOutline size={30} className="text-emerald-900"/>
                <h1 className="text-emerald-900 text-xl font-bold">Diamond Elite</h1>
            </div>

            {/* <Navlinks /> */}

            <NavBtns />
        </nav>
    )
}

export default Navbar