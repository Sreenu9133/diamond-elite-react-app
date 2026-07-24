function DetailCard() {
    return (
        <div className="detail-card flex items-center justify-center mt-10">
            <div className="card border rounded-lg w-[60%]">
                <div className="p-detail bg-emerald-900 rounded-t-lg p-5 text-white">
                    <span className="flex flex-col">
                        <h1>John Doe</h1>
                        <p>+91 9134568988</p>
                    </span>
                </div>

                <div className="p-more-details flex flex-col gap-5 bg-white rounded-b-lg p-5">
                    <div className="normal-details flex gap-5 items-center justify-center">
                        <div className="d1 flex flex-col justify-between w-[45%] gap-5">
                            <span className="flex flex-col items-start bg-[#f8fafc] p-3 rounded-lg">
                                <p>Linked Email Address </p>
                                <p>john_doe_databse@gmail.com</p>
                            </span>

                            <span className="flex flex-col items-start bg-[#f8fafc] p-3 rounded-lg">
                                <p>Account ID</p>
                                <p>User_00128</p>
                            </span>
                        </div>

                        <div className="d2 flex flex-col justify-between w-[45%] gap-5">
                            <span className="flex flex-col items-start bg-[#f8fafc] p-3 rounded-lg">
                                <p>Verification Status</p>
                                <p>connected and active</p>
                            </span>

                            <span className="flex flex-col items-start bg-[#f8fafc] p-3 rounded-lg">
                                <p>Current VIP tier</p>
                                <p>Diamond VIP Member 1</p>
                            </span>
                        </div>
                    </div>

                    <p className="text-emerald-900 text-start font-bold">Secured Banking Credentials</p>

                    <div className="normal-details flex gap-5 items-center justify-center">
                        <div className="d1 flex flex-col justify-between w-[45%] gap-5">
                            <span className="flex flex-col items-start gap-2">
                                <p>UPI ID for Direct Settlements</p>
                                <input type="text" className="border p-1 rounded-lg w-[80%] placeholder:italic placeholder:p-2" placeholder="Enter your upi id" />
                            </span>


                        </div>

                        <div className="d2 flex flex-col justify-between w-[45%] gap-5">
                            <span className="flex flex-col items-start gap-2">
                                <p>Bank Account / IFSC Route</p>
                                <input type="text" className="border p-1 rounded-lg w-[80%] placeholder:italic placeholder:p-2" placeholder="Enter your bank details" />
                            </span>
                        </div>
                    </div>

                    <div className="save-btn">
                        <button className="rounded-lg p-2 bg-emerald-900 text-white text-sm w-[30%] hover:bg-transparent hover:border hover:text-black">Save Linked Credentials</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailCard