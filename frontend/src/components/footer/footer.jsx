import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoDiamond } from "react-icons/io5";
import { IoNewspaperSharp } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";






function Footer(){
    return(
        <footer className="footer-page flex w-full items-center justify-center gap-20 px-5 py-1 fixed bottom-0 left-0 bg-white">
            <div className="home-container flex flex-col items-center">
                <FaHome size={35} className="text-emerald-900"/>
                <h1>Home</h1>
            </div>
            <div className="product-container flex flex-col items-center">
                <AiFillProduct size={35} className="text-emerald-900" />
                <h1>Product</h1>
            </div>
            <div className="work-container flex flex-col items-center">
                <IoDiamond size={35} className="text-emerald-900" />
                <h1>Work</h1>
            </div>
            <div className="news-container flex flex-col items-center">
                <IoNewspaperSharp size={35} className="text-emerald-900" />
                <h1>News</h1>
            </div>
            <div className="me-container flex flex-col items-center">
                <IoMdPerson size={35} className="text-emerald-900" />
                <h1>Me</h1>
            </div>
        </footer>
    )
}

export default Footer