import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoMdTime } from "react-icons/io";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { PiMoneyWavyLight } from "react-icons/pi";
import { TbGraph } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";

function Card2(){
    return(
        <div className="card w-[40%] m-10">
            <div className="card-detail rounded-lg p-5 bg-linear-to-r from-[#ffff] via-[#def3e9] to-[#c0ebda] shadow-2xl">
                <span>
                    <span className="flex flex-col">
                        <p>Low-power cleaning vechile 01-B</p>
                        <p className="flex items-center"><LiaRupeeSignSolid /> 149</p>
                    </span>
                </span>

                <div className="inner-card p-2 my-2 rounded-[10px] flex flex-wrap bg-white shadwo-2xl border">

                    <div className="container w-[45%] flex items-center gap-2">
                        <IoMdTime className="text-emerald-900" />
                        <span>
                            <p>Hourly Earnings</p>
                            <p className="flex items-center"><LiaRupeeSignSolid /> 1.6</p>
                        </span>
                    </div>

                    <div className="container w-[45%] flex items-center gap-2">
                        <LuCalendarDays className="text-emerald-900" />
                        <span>
                            <p>Day of use</p>
                            <p className="flex items-center">7</p>
                        </span>
                    </div>

                    <div className="container w-[45%]  flex items-center gap-2">
                        <TbGraph className="text-emerald-900" />
                        <span>
                            <p>Daily rebate</p>
                            <p className="flex items-center"><LiaRupeeSignSolid /> 38.40</p>
                        </span>
                    </div>

                    <div className="container w-[45%] flex items-center gap-2">
                        <FaMoneyBillAlt className="text-emerald-900" />
                        <span>
                            <p>Reward Points</p>
                            <p className="flex items-center">30</p>
                        </span>
                    </div>

                    <div className="container w-[45%] flex items-center gap-2">
                        <PiMoneyWavyLight className="text-emerald-900" />
                        <span>
                            <p>Total Revenue</p>
                            <p className="flex items-center"><LiaRupeeSignSolid /> 268.8</p>
                        </span>
                    </div>

                    <div className="container w-[45%] flex items-center gap-2">
                        <MdOutlineProductionQuantityLimits className="text-emerald-900" />
                        <span>
                            <p>Quantity per person</p>
                            <p className="flex items-center">1</p>
                        </span>
                    </div>
                    <span className="flex items-center gap-5 mt-5 w-full">
                        <button className="border rounded-lg bg-transparent border-emerald-900 py-2 w-[50%] hover:bg-emerald-900 hover:text-white hover:border-none hover:py-[10px]">Detail</button>
                        <button className="bg-emerald-900 rounded-lg py-[10px] text-white w-[50%] hover:bg-transparent hover:border hover:text-black hover:py-2">Purchase</button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card2