import HomeWallet from "./home-wallet"
import StartMining from "./start-mining"
import HomeMembership from "./home-membership"
import LicenseComparision from "./license-comparision"
import HomeFAQ from "./home-faq"
import HomeHead from "./home-top-section"

function Home(){
    return(
        <div className="home-page">
            <HomeHead />
            <HomeWallet />
            <StartMining />
            <HomeMembership />
            <LicenseComparision />
            <HomeFAQ />
        </div>
    )
}

export default Home