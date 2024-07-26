import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";
import {useLocation} from "react-router-dom";

const Single = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const rowId = location.pathname.split("/")[3];
    const {data, loading, error} = useFetch(`http://localhost:8080/api/v1/${path}/${rowId}`)

    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>

                        {
                            loading ? "loading..." : (
                                <div className="item">
                                    <img
                                        src={data.img}
                                        alt=""
                                        className="itemImg"
                                    />
                                    <div className="details">
                                        <h1 className="itemTitle">{data.username}</h1>
                                        <div className="detailItem">
                                            <span className="itemKey">Email: {data.email}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Phone: {data.phone}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">City: {data.city}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Country: {data.country}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List/>
                </div>
            </div>
        </div>
    );
};

export default Single;
