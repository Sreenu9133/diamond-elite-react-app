import { IoIosArrowDropright } from "react-icons/io";

function ProfileCard(){
    return(
        <div className="profile-card flex flex-col bg-[#f0f7ff] w-full items-center justify-center p-10 gap-10">
            <div className="card rounded-lg bg-white p-5 w-full flex flex-col gap-1">
                <p className="border-b border-gray-300 pb-2 flex items-center justify-between">My Assets <IoIosArrowDropright size={20} /></p>
                <p className="flex items-center justify-between">My Bill <IoIosArrowDropright size={20} /></p>
            </div>

            <div className="card rounded-lg bg-white p-5 w-full flex flex-col gap-1">
                <p className="border-b border-gray-300 pb-2 flex items-center justify-between">Platform Introd <IoIosArrowDropright size={20} /></p>
                <p className="flex items-center justify-between border-b border-gray-300 pb-2">Payment Complaints <IoIosArrowDropright size={20} /></p>
                <p className="flex items-center justify-between border-b border-gray-300 pb-2">Bank Card <IoIosArrowDropright size={20} /></p>
                <p className="flex items-center justify-between border-b border-gray-300 pb-2">Change Password <IoIosArrowDropright size={20} /></p>
                <p className="flex items-center justify-between border-b border-gray-300 pb-2">Gift redemption <IoIosArrowDropright size={20} /></p>
                <p className="flex items-center justify-between">App Download <IoIosArrowDropright size={20} /></p>
            </div>
        </div>
    )
}

export default ProfileCard