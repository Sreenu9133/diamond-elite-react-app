import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoDiamond } from "react-icons/io5";
import { IoNewspaperSharp } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";


function Footer() {
    return (
<<<<<<< HEAD
        <>
            <footer className="footer-page flex w-full items-center justify-center gap-20 px-5 py-1 fixed bottom-0 left-0 bg-white max-[640px]:hidden">
                <Link to="/home">
                    <div className="home-container flex flex-col items-center">
                        <FaHome size={35} className="text-emerald-900" />
                        <h1>Home</h1>
                    </div>
                </Link>
                <Link to="/products">
                    <div className="product-container flex flex-col items-center">
                        <AiFillProduct size={35} className="text-emerald-900" />
                        <h1>Product</h1>
                    </div>
                </Link>
                <Link to="/work">
                    <div className="work-container flex flex-col items-center">
                        <IoDiamond size={35} className="text-emerald-900" />
                        <h1>Work</h1>
                    </div>
                </Link>
                <Link>
                    <div className="news-container flex flex-col items-center">
                        <IoNewspaperSharp size={35} className="text-emerald-900" />
                        <h1>News</h1>
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="me-container flex flex-col items-center">
                        <IoMdPerson size={35} className="text-emerald-900" />
                        <h1>Me</h1>
                    </div>
                </Link>
            </footer>



            {/* Mobile View */}
            <footer className="footer-page flex w-full items-center justify-center gap-20 px-5 py-1 fixed bottom-0 left-0 bg-white min-[641px]:hidden">
                <Link to="/home">
                    <div className="home-container flex flex-col items-center">
                        <FaHome size={20} className="text-emerald-900" />
                        <h4>Home</h4>
                    </div>
                </Link>
                <Link to="/products">
                    <div className="product-container flex flex-col items-center">
                        <AiFillProduct size={20} className="text-emerald-900" />
                        <h4>Product</h4>
                    </div>
                </Link>
                <Link to="/work">
                    <div className="work-container flex flex-col items-center">
                        <IoDiamond size={20} className="text-emerald-900" />
                        <h4>Work</h4>
                    </div>
                </Link>
                <Link>
                    <div className="news-container flex flex-col items-center">
                        <IoNewspaperSharp size={20} className="text-emerald-900" />
                        <h4>News</h4>
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="me-container flex flex-col items-center">
                        <IoMdPerson size={20} className="text-emerald-900" />
                        <h4>Me</h4>
                    </div>
                </Link>
            </footer>
        </>
=======
        <footer className="footer-page flex w-full items-center justify-center gap-20 px-5 py-1 fixed bottom-0 left-0 bg-white">
            <Link to="/home">
                <div className="home-container flex flex-col items-center">
                    <FaHome size={35} className="text-emerald-900" />
                    <h1>Home</h1>
                </div>
            </Link>
            <Link  to="/products">
                <div className="product-container flex flex-col items-center">
                    <AiFillProduct size={35} className="text-emerald-900" />
                    <h1>Product</h1>
                </div>
            </Link>
            <Link to="/work">
                <div className="work-container flex flex-col items-center">
                    <IoDiamond size={35} className="text-emerald-900" />
                    <h1>Work</h1>
                </div>
            </Link>
            <Link>
                <div className="news-container flex flex-col items-center">
                    <IoNewspaperSharp size={35} className="text-emerald-900" />
                    <h1>News</h1>
                </div>
            </Link>
            <Link>
                <div className="me-container flex flex-col items-center">
                    <IoMdPerson size={35} className="text-emerald-900" />
                    <h1>Me</h1>
                </div>
            </Link>
        </footer>
>>>>>>> e263cf0 (backend+frontend)
    )
}

export default Footer