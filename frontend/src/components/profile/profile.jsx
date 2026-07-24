import ProfileCard from "./profile-card"
import DetailCard from "./details-card"

function Profile(){
    return(
        <div className="profile-part">
            <DetailCard />
            <ProfileCard />
        </div>
    )
}

export default Profile