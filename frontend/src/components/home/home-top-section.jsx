import { GiDiamondTrophy } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";



function HomeHead() {
    return (
        <div className="home-top-section rounded-lg m-10 bg-linear-to-r from-[#ffff] via-[#def3e9] to-[#c0ebda] max-[576px]:m-5">
            <div className="home-details flex items-center justify-between p-10 max-[640px]:flex-col-reverse max-[872px]:flex-col max-[576px]:p-5">
                <div className="home-left w-[59%] flex flex-col items-start gap-4 md:w-full sm:w-full max-[640px]:w-full">
                    <p className="text-emerald-900 text-[70px] font-semibold leading-none max-[1052px]:text-[60px] max-[943px]:text-[40px]">Grow With</p>
                    <p className="text-emerald-500 text-[70px] font-semibold leading-none max-[1052px]:text-[60px] max-[943px]:text-[40px]">Diamond Elite</p>
                    <p className="text-gray-600">A premium computational investment platform designed for consistent growth, high-frequency mining transparency, and long-term decentralized financial freedom.</p>
                    <span className="flex gap-2 max-[576px]:flex-col max-[576px]:w-full">
                        <Link className="max-[576px]:w-full">
                            <button className="rounded-3xl bg-emerald-900 text-white px-5 py-2 flex items-center justify-center gap-2 hover:bg-transparent hover:text-black border `max-[576px]:w-[100%]`">
                                JOIN NOW
                                <FaArrowRight size={15} />
                            </button>
                        </Link>
                        <Link className="max-[576px]:w-full">
                            <button className="bg-transparent border rounded-3xl text-black px-5 py-2 flex items-center justify-center gap-2 hover:bg-emerald-900 hover:text-white hover:border-none `max-[576px]:w-[100%]`">
                                VIEW PLANS
                                <FaArrowRight size={15} />
                            </button>
                        </Link>
                    </span>
                    <div className="trust-btns mt-4 flex items-center justify-between w-[70%] min-[640px]:w-full max-[1024]:w-full max-[963px]:flex-wrap max-[963px]: gap-2">
                        <div className="btn flex items-center gap-1 max-[576px]:w-full">
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

                <div className="home-right w-[35%] md:w-full md:flex md:items-center md:justify-center sm:w-full sm:flex sm:items-center sm:justify-center max-[640px]:w-full max-[640px]:flex max-[640px]:items-center max-[640px]:justify-center">
                    <IoDiamond size={400} className="text-[#0f664d] max-[640px]:hidden"  />
                    <IoDiamond size={100} className="text-[#0f664d] mb-5 min-[641px]:hidden" />
                </div>
            </div>
        </div>
    )
}

export default HomeHead