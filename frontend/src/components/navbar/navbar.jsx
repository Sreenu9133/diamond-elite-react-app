import { IoDiamondOutline } from "react-icons/io5";
// import Navlinks from "./nav-links";
import NavBtns from "./nav-btns";
import NavbarMarquee from "./navbar-marquee";

function Navbar() {
    return (
        <>
            <nav className="flex items-center px-10 py-4 w-full justify-between shadow-2xl border-b border-emerald-950 bg-white max-[576px]:p-5">

                <div className="logo flex items-center gap-1 w-[20%]">
                    <IoDiamondOutline size={30} className="text-emerald-900" />
                    <h1 className="text-emerald-900 text-xl font-bold max-[576px]:text-sm">Diamond Elite</h1>
                </div>

                {/* <Navlinks /> */}

                <NavBtns />
            </nav>
            <NavbarMarquee />

        </>
    )
}

export default Navbar