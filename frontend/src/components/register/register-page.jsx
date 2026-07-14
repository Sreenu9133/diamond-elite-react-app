import { MdPersonAddAlt1 } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="register-part w-full min-h-screen flex flex-col items-center justify-center bg-[#f0f7ff]">
            <div className="register-form-page w-[90%] sm:w-[100%] md:w-[60%] lg:w-[45%] rounded-lg border-emerald-900 flex flex-col items-center py-10">

                <div className="register-top-part bg-emerald-900 w-full rounded-t-lg flex flex-col items-center gap-1 p-3">
                    <MdPersonAddAlt1 size={40} className="text-white" />
                    <h2 className="text-white">CREATE ELITE WALLET</h2>
                    <h4 className="text-white text-sm">JOIN THE SMART INVESTMENT PLATFORM</h4>
                </div>

                <div className="register-form w-full flex flex-col items-center gap-4 py-5 shadow-2xl rounded-b-lg">
                    <div className="name-container flex flex-col w-[70%] gap-1">
                        <label htmlFor="">Legal Full Name</label>
                        <input type="text" className="border p-2 rounded-lg" />
                    </div>

                    <div className="contact-container flex flex-col w-[70%] gap-1">
                        <label htmlFor="">Mobile Contact Number</label>
                        <input type="text" className="border p-2 rounded-lg" />
                    </div>

                    <div className="password-container flex flex-col w-[70%] gap-1">
                        <label htmlFor="">Password</label>
                        <input type="password" className="border p-2 rounded-lg" />
                    </div>

                    <div className="confirm-password-container flex flex-col w-[70%] gap-1">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" className="border p-2 rounded-lg" />
                    </div>

                    <div className="referral-container flex flex-col w-[70%] gap-1">
                        <label htmlFor="">Referral Code(Optional)</label>
                        <input type="text" className="border p-2 rounded-lg" />
                    </div>

                    <Link to="/" className="w-[70%]">
                        <button className="p-3 rounded-lg w-full bg-emerald-900 text-white hover:bg-transparent hover:text-black hover:border mt-3 flex items-center justify-center gap-1">
                            <MdPersonAddAlt1 size={25} />
                            Register Elite Wallet
                        </button>
                    </Link>

                    <div className="already-have-account w-[70%] flex items-center justify-between">
                        <p className="w-45%">Already Have a Account?</p>
                        <Link to="/" className="w-[45%]">
                            <button className="border p-3 rounded-lg text-black w-full hover:bg-emerald-900 hover:border-none hover:text-white flex items-center justify-center gap-1">
                                <CiLogin size={25} />
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Register