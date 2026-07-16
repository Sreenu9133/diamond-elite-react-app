import { MdPersonAddAlt1 } from "react-icons/md";
import { PiHandDepositDuotone } from "react-icons/pi";
import { IoMdSwitch } from "react-icons/io";
import { PiHandWithdrawLight } from "react-icons/pi";


function StartMining(){
    return(
        <div className="start-mining-part py-10">
            <p className="text-sm text-[#d4af37] text-center">OPERATIONS PIPELINE</p>
            <h1 className="text-black text-2xl text-center">Start Mining in 4 Easy Steps</h1>
            <p className="text-sm text-gray-500 text-center">Our decentralized relational database instantly routes investments to server nodes.</p>

            <div className="mining-steps flex items-center justify-between w-full px-10 pt-7">
                <div className="step1 flex flex-col items-center gap-2 w-[24%] p-5 rounded-lg relative bg-white shadow-2xl">
                    <h3 className="bg-[#d4af37] rounded-xl py px-2 absolute bottom-37">01</h3>
                    <MdPersonAddAlt1 size={50} className="p-2 rounded-3xl bg-[#f0fdf4] shadow-2xl text-emerald-900"/>
                    <h4 className="text-sm">CREATE WALLET</h4>
                    <p className="text-xs text-center text-gray-500">Sign up with your verified mobile number to secure a node identification address.</p>
                </div>

                <div className="step1 flex flex-col items-center gap-2 w-[24%] p-5 rounded-lg relative bg-white shadow-2xl">
                    <h3 className="bg-[#d4af37] rounded-xl py px-2 absolute bottom-37">02</h3>
                    <PiHandDepositDuotone size={50} className="p-2 rounded-3xl bg-[#f0fdf4] shadow-2xl text-emerald-900"/>
                    <h4 className="text-sm">DEPOSIT RECHARGE</h4>
                    <p className="text-xs text-center text-gray-500">Submit UPI transaction proof. Our back-office admin system approves credits in real-time.</p>
                </div>

                <div className="step1 flex flex-col items-center gap-2 w-[24%] p-5 rounded-lg relative bg-white shadow-2xl">
                    <h3 className="bg-[#d4af37] rounded-xl py px-2 absolute bottom-37">03</h3>
                    <IoMdSwitch size={50} className="p-2 rounded-3xl bg-[#f0fdf4] shadow-2xl text-emerald-900"/>
                    <h4 className="text-sm">DEPLOY CONTRACT</h4>
                    <p className="text-xs text-center text-gray-500">Select Diamond Crystal, Sapphire, or Emerald options to begin hashrate generation.</p>
                </div>

                <div className="step1 flex flex-col items-center gap-2 w-[24%] p-5 rounded-lg relative bg-white shadow-2xl">
                    <h3 className="bg-[#d4af37] rounded-xl py px-2 absolute bottom-37">04</h3>
                    <PiHandWithdrawLight size={50} className="p-2 rounded-3xl bg-[#f0fdf4] shadow-2xl text-emerald-900"/>
                    <h4 className="text-sm">REQUEST SETTLE</h4>
                    <p className="text-xs text-center text-gray-500">Submit withdrawal requests straight to linked UPI networks with daily automatic clearance.</p>
                </div>
            </div>
        </div>
    )
}

export default StartMining