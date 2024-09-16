import "./profile.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import Information from "../../components/info/Information";

const Profile = () => {

    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Information/>
            </div>
        </div>
    )
};

export default Profile;
