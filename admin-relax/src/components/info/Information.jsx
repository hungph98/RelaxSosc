import {useLocation} from "react-router-dom";


const Information = () => {
    const location = useLocation();
    const path = location.pathname;

    console.log(path)

    return (
        <div>

        </div>
    )
}

export default Information