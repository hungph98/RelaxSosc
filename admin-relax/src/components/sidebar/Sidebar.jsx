import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {Link} from "react-router-dom";
import {DarkModeContext} from "../../context/darkModeContext";
import {useContext} from "react";

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">Admin</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <li>
                            <DashboardIcon className="icon"/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration: "none"}}>
                        <li>
                            <PersonOutlineIcon className="icon"/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/hotels" style={{textDecoration: "none"}}>
                        <li>
                            <StoreIcon className="icon"/>
                            <span>Hotels</span>
                        </li>
                    </Link>
                    <Link to="/rooms" style={{textDecoration: "none"}}>
                        <li>
                            <StoreIcon className="icon"/>
                            <span>Rooms</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                    <Link to={"/profile"} style={{textDecoration: "none"}}>
                        <li>
                            <AccountCircleOutlinedIcon className="icon"/>
                            <span>Profile</span>
                        </li>
                    </Link>
                    <li>
                        <ExitToAppIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({type: "LIGHT"})}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({type: "DARK"})}
                ></div>
            </div>
        </div>
    );
};

export default Sidebar;
