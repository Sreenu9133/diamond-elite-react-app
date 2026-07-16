function NavbarMarquee() {
    return (
        <div className="navbar-marquee bg-black py-2 px-10 flex items-center overflow-hidden w-full relative">
            <button className="bg-[#d4af37] rounded-lg text-white font-semibold px-4 py-2 text-center text-sm z-20 whitespace-nowrap">
                Latest Notice
            </button>
            
            <div className="flex-1 overflow-hidden relative flex items-center">
                <div className="animate-marquee whitespace-nowrap text-white text-sm pl-4 font-medium">
                    System node values fully operational. High frequency daily payouts active. Direct Withdrawal processes instantly. Invite friends to unlock Level 3 yields!
                </div>
            </div>
        </div>
    );
}

export default NavbarMarquee;