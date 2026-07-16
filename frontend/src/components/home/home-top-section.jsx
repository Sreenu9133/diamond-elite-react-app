import { GiDiamondTrophy } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { FaAward } from "react-icons/fa";


function HomeHead() {
    return (
        <div className="home-top-section rounded-lg m-10 bg-gradient-to-r from-[#ffff] via-[#def3e9] to-[#c0ebda]">
            <div className="home-details flex items-center justify-between p-10 max-[640px]:flex-col">
                <div className="home-left w-[59%] flex flex-col items-start gap-4 md:w-full sm:w-full max-[640px]:w-full">
                    <p className="text-emerald-900 text-[70px] font-semibold leading-none">Grow With</p>
                    <p className="text-emerald-500 text-[70px] font-semibold leading-none">Diamond Elite</p>
                    <p className="text-gray-600">A premium computational investment platform designed for consistent growth, high-frequency mining transparency, and long-term decentralized financial freedom.</p>
                    <span className="flex gap-2">
                        <Link>
                            <button className="rounded-3xl bg-emerald-900 text-white px-5 py-2 flex items-center justify-center gap-2 hover:bg-transparent hover:text-black border">
                                JOIN NOW
                                <FaArrowRight size={15} />
                            </button>
                        </Link>
                        <Link>
                            <button className="bg-transparent border rounded-3xl text-black px-5 py-2 flex items-center justify-center gap-2 hover:bg-emerald-900 hover:text-white hover:border-none">
                                VIEW PLANS
                                <FaArrowRight size={15} />
                            </button>
                        </Link>
                    </span>
                    <div className="trust-btns mt-4 flex items-center justify-between w-[70%] min-[640px]:w-full max-[1024]:w-full max-[963px]:flex-wrap max-[963px]: gap-2">
                        <div className="btn flex items-center gap-1">
                            <MdOutlinePrivacyTip size={35} className="text-emerald-900 bg-[#eef9f4] p-2 rounded-2xl"/>
                            <span className="flex flex-col items-center">
                                <p className="text-[10px] font-bold">SECURE & TRUSTED</p>
                                <p className="text-[10px] font-bold text-gray-500">Bank-grade Security</p>
                            </span>
                        </div>

                        <div className="btn flex items-center gap-1">
                            <IoTimerOutline size={35} className="text-emerald-900 bg-[#eef9f4] p-2 rounded-2xl"/>
                            <span className="flex flex-col items-center">
                                <p className="text-[10px] font-bold">SECURE & TRUSTED</p>
                                <p className="text-[10px] font-bold text-gray-500">Bank-grade Security</p>
                            </span>
                        </div>

                        <div className="btn flex items-center gap-1">
                            <FaAward size={35} className="text-emerald-900 bg-[#eef9f4] p-2 rounded-2xl"/>
                            <span className="flex flex-col items-center">
                                <p className="text-[10px] font-bold">SECURE & TRUSTED</p>
                                <p className="text-[10px] font-bold text-gray-500">Bank-grade Security</p>
                            </span>
                        </div>
                    </div>

                </div>

                <div className="home-right w-[35%] md:w-full md:flex md:items-center md:justify-center sm:w-full sm:flex sm:items-center sm:justify-center min-[640px]:w-full min-[640px]:flex min-[640px]:items-center min-[640px]:justify-center">
                    <GiDiamondTrophy size={400} className="text-[#0f664d]"  />
                </div>
            </div>
        </div>
    )
}

export default HomeHead