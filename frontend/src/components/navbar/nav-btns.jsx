import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function NavBtns() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false); 
    const [isNotifOpen, setIsNotifOpen] = useState(false); 

    const isAuthPage = location.pathname === "/" || location.pathname === "/register";

    const notifications = [
        {
            id: 1,
            title: "Welcome to Wallet!",
            message: "Thanks for joining us. Secure your keys and start exploring.",
            time: "Just now"
        }
    ];

    return (
        <div className="nav-container relative w-full">
            <div className="nav-btns max-[576px]:hidden flex items-center justify-end gap-3 w-full">
                {!isAuthPage && (
                    <>
                        <div className="relative inline-block cursor-pointer" onClick={() => setIsNotifOpen(!isNotifOpen)}>
                            <MdOutlineMailOutline size={35} className="text-emerald-900" />
                            {notifications.length > 0 && (
                                <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                            )}
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

            {isNotifOpen && !isAuthPage && (
                <div className="max-[576px]:hidden absolute right-24 top-14 bg-white border border-emerald-900 shadow-xl rounded-xl p-4 w-full z-50 animate-fade-in">
                    <div className="flex justify-between items-center border-b pb-2 mb-2">
                        <h4 className="font-semibold text-emerald-900">Notifications</h4>
                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium">
                            {notifications.length} New
                        </span>
                    </div>
                    <div className="flex flex-col gap-3 max-h-60 overflow-y-auto">
                        {notifications.map((notif) => (
                            <div key={notif.id} className="p-2.5 bg-emerald-50/50 rounded-lg hover:bg-emerald-50 transition-colors">
                                <p className="text-sm font-semibold text-gray-800">{notif.title}</p>
                                <p className="text-xs text-gray-600 mt-0.5">{notif.message}</p>
                                <span className="text-[10px] text-gray-400 block mt-1 text-right">{notif.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="min-[577px]:hidden flex items-center">
                <button 
                    onClick={() => {
                        setIsOpen(!isOpen);
                        if (isNotifOpen) setIsNotifOpen(false); 
                    }} 
                    className="text-emerald-900 focus:outline-none"
                >
                    {isOpen ? <IoClose size={35} /> : <GiHamburgerMenu size={35} />}
                </button>
            </div>

            {isOpen && (
                <div className="min-[577px]:hidden absolute right-0 top-12 bg-white border border-gray-200 shadow-lg rounded-lg p-4 flex flex-col gap-4 z-50 min-w-[220px]">
                    {!isAuthPage && (
                        <>
                            <div 
                                className="email-red relative flex flex-col gap-2 cursor-pointer border-b pb-3 border-gray-100"
                                onClick={() => setIsNotifOpen(!isNotifOpen)}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <MdOutlineMailOutline size={30} className="text-emerald-900" />
                                        {notifications.length > 0 && (
                                            <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                                        )}
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Notifications ({notifications.length})</span>
                                </div>
                                
                                {isNotifOpen && (
                                    <div className="mt-2 flex flex-col gap-2 bg-gray-50 p-2 rounded-lg max-h-40 overflow-y-auto">
                                        {notifications.map((notif) => (
                                            <div key={notif.id} className="p-2 bg-white rounded border border-gray-100 shadow-sm">
                                                <p className="text-xs font-semibold text-gray-800">{notif.title}</p>
                                                <p className="text-[11px] text-gray-600 mt-0.5">{notif.message}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="language-btn flex items-center gap-2">
                                <HiOutlineGlobeAsiaAustralia size={30} className="text-emerald-900" />
                                <p className="text-sm">En</p>
                            </div>
                            <Link to="/" onClick={() => setIsOpen(false)}>
                                <button className="w-full text-center rounded-lg bg-emerald-900 text-white py-2 px-5 hover:bg-transparent hover:text-black border border-emerald-900">Log Out</button>
                            </Link>          
                        </>
                    )}

                    {location.pathname === "/register" && (
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            <button className="w-full py-2 px-3 rounded-lg bg-emerald-900 text-white hover:text-black hover:border hover:bg-transparent flex items-center justify-center gap-1">
                                <CiLogin size={25}/>
                                Login
                            </button>
                        </Link>
                    )}

                    {location.pathname === "/" && (
                        <Link to="/register" onClick={() => setIsOpen(false)}>
                            <button className="w-full rounded-lg px-3 py-2 bg-emerald-900 text-white hover:border hover:bg-transparent hover:text-black flex items-center justify-center gap-1 whitespace-nowrap">
                                <MdOutlinePersonAddAlt size={25} />
                                Create Wallet
                            </button>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}

export default NavBtns;