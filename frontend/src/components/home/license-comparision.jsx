import { LiaRupeeSignSolid } from "react-icons/lia";


function LicenseComparision(){
    return(
        <div className="license-comparision p-10 max-[576px]:p-5">
            <div className="lc-head flex flex-col items-center justify-center py-10">
                <h1 className="text-2xl font-bold text-center">Premium Licenses Feature Comparison</h1>
                <p className="text-sm text-gray-500 text-center">Meticulous functional metrics comparison straight from our database schema records.</p>
            </div>

            <div className="lc-table rounded-lg w-full p-4 max-[576px]:text-[10px] max-[576px]:p-0  max-[664px]:text-[12px] max-[768px]:text-[14px]"> 
                <div className="table-head flex items-center justify-between bg-emerald-900 rounded-t-lg text-white px-5 py-3">
                    <p className="w-[20%]">License Properties</p>
                    <p className="flex items-center w-[20%]">Diamond Crystal</p>
                    <p className="flex items-center w-[20%]">License Properties</p>
                    <p className="flex items-center w-[20%]">License Properties</p>
                </div>

                 <div className="table-head flex items-center justify-between bg-white text-black px-5 py-3">
                    <p className="w-[20%]">License Capital</p>
                    <p className="flex items-center w-[20%]"><LiaRupeeSignSolid /> 500</p>
                    <p className="flex items-center w-[20%]"><LiaRupeeSignSolid /> 850</p>
                    <p className="flex items-center w-[20%]"><LiaRupeeSignSolid /> 2000</p>
                </div>

                <div className="table-head flex items-center justify-between bg-white text-black px-5 py-3">
                    <p className="w-[20%]">Validity Span</p>
                    <p className="w-[20%]">45 Days</p>
                    <p className="w-[20%]">37 Days</p>
                    <p className="w-[20%]">37 Days</p>
                </div>

                <div className="table-head flex items-center justify-between bg-white text-black px-5 py-3">
                    <p className="w-[20%]">Daily Return Net</p>
                    <p className="flex items-center w-[20%]"><LiaRupeeSignSolid /> 50</p>
                    <p className="flex items-center w-[20%]"><LiaRupeeSignSolid /> 150</p>
                    <p className="flex items-center w-[20%]"><LiaRupeeSignSolid /> 300</p>
                </div>

                <div className="table-head flex items-center justify-between bg-white text-black px-5 py-3">
                    <p className="w-[20%]">Maturity Yield Value</p>
                    <p className="flex items-center w-[20%]"><LiaRupeeSignSolid /> 2,250</p>
                    <p className="flex items-center w-[20%]"><LiaRupeeSignSolid /> 5,550</p>
                    <p className="flex items-center w-[20%]"><LiaRupeeSignSolid /> 11,100</p>
                </div>

                <div className="table-head flex items-center justify-between bg-white text-black px-5 py-3">
                    <p className="w-[20%]">Referral Level Allocation</p>
                    <p className="w-[20%]">L1 (10% Match)</p>
                    <p className="w-[20%]">L1 + L2 Support</p>
                    <p className="text-[#d4af37] w-[20%]">L1, L2 + L3 Enabled</p>
                </div>

                <div className="table-head flex items-center justify-between bg-white text-black px-5 py-3 rounded-b-lg">
                    <p className="w-[20%]">Server Node Priority</p>
                    <p className="w-[20%]">Standard Standard</p>
                    <p className="w-[20%]">Accelerated Speed</p>
                    <p className="w-[20%]">Ultra Dedicated Core</p>
                </div>


                
            </div>
        </div>
    )
}

export default LicenseComparision