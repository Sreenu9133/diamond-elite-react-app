import { IoDiamondOutline } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

function Membership() {
    return (
        <div className="membership-section py-10">
            <div className="membership-head flex flex-col items-center justify-center gap-1">
                <p className="text-[#d4af37] font-semibold text-sm text-center">CHOOSE YOUR MEMBERSHIP PLANS</p>
                <h1 className="font-semibold text-2xl text-center">High Yield Computational Mining Licenses</h1>
                <p className="text-sm text-gray-500 text-center">Simple plan structures. Real-time compounding payouts. Backed by system node wallets.</p>
            </div>

            <div className="membership-card p-10 flex items-center justify-between">
                <div className="card border p-5 w-[30%] bg-white rounded-lg flex flex-col">
                    <span className="flex items-center justify-between pb-5">
                        <p className="px-2 py-1 bg-[#d4af37] rounded-xl w-[40%] text-center text-xs">MOST POPULAR</p>
                        <IoDiamondOutline size={35} className="bg-[#f0fdf4] p-2 rounded-2xl shadow-2xl text-gray-500"/>
                    </span>
                    <h4 className="text-black font-semibold">Diamond Crystal</h4>
                    <p className="text-xs text-gray-500">Perfect baseline plan for high speed, low barrier entry to system nodes.</p>

                    <h1 className="flex items-center pt-5 text-2xl italic"><FaIndianRupeeSign /> 500</h1>

                    <div className="terms flex items-center justify-between border-y mt-5 py-2 border-gray-400">
                        <span className="flex flex-col gap-1 items-center">
                            <h6 className="text-[10px]">CONTRACT TERM</h6>
                            <h2 className="flex text-sm items-center">45 Days</h2>
                        </span>
                        <span className="flex flex-col gap-1 items-center">
                            <p className="text-[10px]">DAILY RETURN</p>
                            <h2 className="flex text-sm items-center"><FaIndianRupeeSign /> 50</h2>
                        </span>
                        <span className="flex flex-col gap-1 items-center">
                            <p className="text-[10px]">MAX RETURN</p>
                            <h2 className="flex text-sm items-center"><FaIndianRupeeSign /> 2250</h2>
                        </span>                
                    </div>

                    <button className="bg-emerald-900 p-2 w-full rounded-lg text-white mt-5 flex items-center justify-center gap-1">
                        DEPLOY LICENSE
                        <FaLongArrowAltRight size={20} className="text-[#d4af37]" />
                    </button>
                </div>

                <div className="card border p-5 w-[30%] bg-white rounded-lg flex flex-col">
                    <span className="flex items-center justify-between pb-5">
                        <p className="px-2 py-1 bg-[#d4af37] rounded-xl w-[40%] text-center text-xs">HIGH HARVEST</p>
                        <IoDiamondOutline size={35} className="bg-[#f0fdf4] p-2 rounded-2xl shadow-2xl text-[#3b82f6]"/>
                    </span>
                    <h4 className="text-black font-semibold">Diamond Sapphire</h4>
                    <p className="text-xs text-gray-500">Standard mid-tier computational server hashrate license with active compound payouts.</p>

                    <h1 className="flex items-center pt-5 text-2xl italic"><FaIndianRupeeSign /> 850</h1>

                    <div className="terms flex items-center justify-between border-y mt-5 py-2 border-gray-400">
                        <span className="flex flex-col gap-1 items-center">
                            <h6 className="text-[10px]">CONTRACT TERM</h6>
                            <h2 className="flex text-sm items-center">37 Days</h2>
                        </span>
                        <span className="flex flex-col gap-1 items-center">
                            <p className="text-[10px]">DAILY RETURN</p>
                            <h2 className="flex text-sm items-center"><FaIndianRupeeSign /> 150</h2>
                        </span>
                        <span className="flex flex-col gap-1 items-center">
                            <p className="text-[10px]">MAX RETURN</p>
                            <h2 className="flex text-sm items-center"><FaIndianRupeeSign /> 5550</h2>
                        </span>                
                    </div>

                    <button className="bg-emerald-900 p-2 w-full rounded-lg text-white mt-5 flex items-center justify-center gap-1">
                        DEPLOY LICENSE
                        <FaLongArrowAltRight size={20} className="text-[#d4af37]" />
                    </button>
                </div>

                <div className="card border p-5 w-[30%] bg-white rounded-lg flex flex-col">
                    <span className="flex items-center justify-between pb-5">
                        <p className="px-2 py-1 bg-[#d4af37] rounded-xl w-[40%] text-center text-xs">ELITE YIELD</p>
                        <IoDiamondOutline size={35} className="bg-[#f0fdf4] p-2 rounded-2xl shadow-2xl text-[#10b981]"/>
                    </span>
                    <h4 className="text-black font-semibold">Diamond Emerald</h4>
                    <p className="text-xs text-gray-500">Our maximum hardware efficiency license with instant daily settlements and VIP status.</p>

                    <h1 className="flex items-center pt-5 text-2xl italic"><FaIndianRupeeSign /> 2000</h1>

                    <div className="terms flex items-center justify-between border-y mt-5 py-2 border-gray-400">
                        <span className="flex flex-col gap-1 items-center">
                            <h6 className="text-[10px]">CONTRACT TERM</h6>
                            <h2 className="flex text-sm items-center"><FaIndianRupeeSign /> 37 Days</h2>
                        </span>
                        <span className="flex flex-col gap-1 items-center">
                            <p className="text-[10px]">DAILY RETURN</p>
                            <h2 className="flex text-sm items-center"><FaIndianRupeeSign /> 300</h2>
                        </span>
                        <span className="flex flex-col gap-1 items-center">
                            <p className="text-[10px]">MAX RETURN</p>
                            <h2 className="flex text-sm items-center"><FaIndianRupeeSign /> 11100</h2>
                        </span>                
                    </div>

                    <button className="bg-emerald-900 p-2 w-full rounded-lg text-white mt-5 flex items-center justify-center gap-1">
                        DEPLOY LICENSE
                        <FaLongArrowAltRight size={20} className="text-[#d4af37]" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Membership