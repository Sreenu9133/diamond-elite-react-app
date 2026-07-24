import { FaCrown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";


function InvitationLevelCard(){
    return(
        <div className="invitation-card flex flex-col items-center justify-center gap-5">
            <div className="card rounded-lg p-5 w-[61%] flex flex-col gap-3 bg-[#faecd8]">
                <span className="flex items-center justify-between w-full">
                    <h1 className="flex items-center gap-1 border-b-3 border-orange-500"><FaCrown /> LV1</h1>
                    <Link className="">
                        <button className='rounded-xl bg-orange-500 text-white px-3 py-1 ml-15'>View</button>
                    </Link>
                </span>

                <span className="flex items-center justify-between">
                    <p>Number of registrations</p>
                    <p>0</p>
                </span>

                <span className="flex items-center justify-between">
                    <p>Commission percentage</p>
                    <p>10%</p>
                </span>

                <span className="flex items-center justify-between">
                    <p>Total Revenue</p>
                    <p className="flex items-center gap-1"><LiaRupeeSignSolid /> 0</p>
                </span>
            </div>

            <div className="card rounded-lg p-5 w-[61%] flex flex-col gap-3 bg-[#f9ded7]">
                <span className="flex items-center justify-between w-full">
                    <h1 className="flex items-center gap-1 border-b-3 border-orange-500"><FaCrown /> LV2</h1>
                    <Link className="">
                        <button className='rounded-xl bg-orange-500 text-white px-3 py-1 ml-15'>View</button>
                    </Link>
                </span>

                <span className="flex items-center justify-between">
                    <p>Number of registrations</p>
                    <p>0</p>
                </span>

                <span className="flex items-center justify-between">
                    <p>Commission percentage</p>
                    <p>3%</p>
                </span>

                <span className="flex items-center justify-between">
                    <p>Total Revenue</p>
                    <p className="flex items-center gap-1"><LiaRupeeSignSolid /> 0</p>
                </span>
            </div>

            <div className="card rounded-lg p-5 w-[61%] flex flex-col gap-3 bg-[#ddd1ea]">
                <span className="flex items-center justify-between w-full">
                    <h1 className="flex items-center gap-1 border-b-3 border-orange-500"><FaCrown /> LV3</h1>
                    <Link className="">
                        <button className='rounded-xl bg-orange-500 text-white px-3 py-1 ml-15'>View</button>
                    </Link>
                </span>

                <span className="flex items-center justify-between">
                    <p>Number of registrations</p>
                    <p>0</p>
                </span>

                <span className="flex items-center justify-between">
                    <p>Commission percentage</p>
                    <p>1%</p>
                </span>

                <span className="flex items-center justify-between">
                    <p>Total Revenue</p>
                    <p className="flex items-center gap-1"><LiaRupeeSignSolid /> 0</p>
                </span>
            </div>
        </div>
    )
}

export default InvitationLevelCard