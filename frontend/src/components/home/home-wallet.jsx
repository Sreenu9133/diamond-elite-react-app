import { FaArrowAltCircleDown } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { FaWallet } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";
import { IoDiamondSharp } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";


function HomeWallet() {
    return (
        <div className="home-wallet w-full">
            <div className="wallet-card m-10 rounded-lg bg-white shadow-2xl p-7 flex flex-col gap-15 max-[576px]:m-5">
                <div className="top-part flex items-center justify-between rounded-lg w-full max-[935px]:flex-col max-[935px]:items-start max-[935px]:gap-5">
                    <span className="flex flex-col gap-1 w-[50%] max-[935px]:w-[100%]">
                        <p className="text-sm text-[#d4af37] font-semibold">LIVE DATABASE LEDGER</p>
                        <h1 className="text-xl text-emerald-900 font-bold">Your Premium Account Balance Vault</h1>
                    </span>

                    <span className="flex gap-2 w-[30%] max-[1208px]:w-[40%] max-[935px]:w-[100%] max-[576px]:w-[100%] max-[576px]:flex-col">
                        <button className=" py-2 bg-emerald-900 text-white rounded-lg w-[100%] flex items-center justify-center gap-1 hover:bg-transparent hover:text-black hover:border">
                            Go to Wallet
                            <FaArrowAltCircleDown size={18} className="text-[#d4af37]" />
                        </button>
                        <button className="py-2 bg-transparent border text-black rounded-lg w-[100%] flex items-center justify-center gap-1 hover:bg-emerald-900 hover:border-none hover:text-white">
                            View Transactions
                            <GrTransaction size={18} />
                        </button>
                    </span>
                </div>

                <div className="bottom-part flex w-full items-center justify-between max-[935px]:w-[100%] max-[576px]:flex-col max-[576px]:gap-5 max-[1106px]:flex-wrap max-[1106px]:gap-5">
                    <div className="card flex items-center gap-2 py-2 px-3 w-[23%] rounded-lg bg-[#f0f1f2] shadow-xl max-[632px]:w-[100%] max-[576px]:shadow-md max-[1106px]:w-[45%] max-[1106px]:shadow-sm">
                        <FaWallet size={35} className="text-emerald-900 bg-[#f0fdf4] shadow-2xl p-2 rounded-lg" />
                        <span className="flex flex-col">
                            <p>Available wallet</p>
                            <p className="flex items-center"><LiaRupeeSignSolid />35680.00</p>
                        </span>
                    </div>
                    <div className="card flex items-center gap-2 py-2 px-3 w-[23%] rounded-lg bg-[#f0f1f2] shadow-xl max-[632px]:w-[100%] max-[576px]:shadow-md max-[1106px]:w-[45%] max-[1106px]:shadow-sm">
                        <GoGraph size={35} className="text-emerald-900 bg-[#f0fdf4] shadow-2xl p-2 rounded-lg" />
                        <span className="flex flex-col">
                            <p>Daily Income Yield</p>
                            <p className="flex items-center"><LiaRupeeSignSolid />450.00</p>
                        </span>
                    </div>
                    <div className="card flex items-center gap-2 py-2 px-3 w-[23%] rounded-lg bg-[#f0f1f2] shadow-xl max-[632px]:w-[100%] max-[576px]:shadow-md max-[1106px]:w-[45%] max-[1106px]:shadow-sm">
                        <RiTeamFill size={35} className="text-emerald-900 bg-[#f0fdf4] shadow-2xl p-2 rounded-lg" />
                        <span className="flex flex-col">
                            <p>My Downline Team</p>
                            <p>128 active nodes</p>
                        </span>
                    </div>
                    <div className="card flex items-center gap-2 py-2 px-3 w-[23%] rounded-lg bg-[#f0f1f2] shadow-xl max-[632px]:w-[100%] max-[576px]:shadow-md max-[1106px]:w-[45%] max-[1106px]:shadow-sm">
                        <IoDiamondSharp size={35} className="text-emerald-900 bg-[#f0fdf4] shadow-2xl p-2 rounded-lg" />
                        <span className="flex flex-col">
                            <p>Active Contract Speed</p>
                            <p>Daimond Sapphire</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWallet