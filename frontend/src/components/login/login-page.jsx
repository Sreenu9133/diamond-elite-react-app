import { IoDiamondOutline } from "react-icons/io5";
import {Link} from "react-router-dom"

function Login() {
    return (
        <div className="login-part p-7 flex flex-col items-center justify-center w-full min-h-screen bg-[#f0f7ff] py-10">
            <div className="login-form w-[95%] sm:w-[100%] md:w-[60%] lg:w-[45%] flex flex-col items-center rounded-lg">
                <div className="logo flex flex-col items-center gap-1 bg-emerald-900 w-full py-8 rounded-t-lg">
                    <IoDiamondOutline size={40} className="text-white" />
                    <h2 className="text-emerald-900 text-2xl font-bold text-white">SIGN IN VAULT</h2>
                    <h4 className="text-white text-sm">DIAMOND ELITE SECURITY GATEWAY</h4>
                </div>

                <div className="login w-full bg-white shadow-2xl rounded-b-lg">
                    <form action="" className="flex flex-col items-center gap-5 py-10">
                        <div className="number-container flex flex-col w-[70%] gap-2">
                            <label htmlFor="">Registered Phone Number</label>
                            <input type="text" name="" id="" className="border p-2 rounded-sm" />
                        </div>

                        <div className="password-container flex flex-col w-[70%]">
                            <label htmlFor="">Secret Access Key</label>
                            <input type="password" name="" id="" className="border p-2 rounded-sm" />
                        </div>

                        <Link to="/home" className="w-full flex items-center justify-center">
                            <button className="rounded-lg bg-emerald-900 p-2 w-[70%] text-white hover:bg-transparent hover:border hover:border-emerald-900 hover:text-black">Verify Identity</button>
                        </Link>

                        <div className="create-account flex w-[70%] items-center">
                            <p className="w-[50%]">Don't have account?</p>
                            <Link to="/register" className="w-[50%]">
                                <button className="rounded-lg bg-white border p-2 w-full text-black hover:bg-emerald-900 hover:text-white hover:border-none">Create One</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login