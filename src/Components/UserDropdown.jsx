import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const UserDropdown = () => {
    const { user, LogoutUser } = useAuth()

    const handleLogout =()=>{
        LogoutUser()
    }
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1"><div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img src={`${user?.photoURL || "../../public/IMG20220605165525.jpg"}`} />
                </div>
            </div></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1]  p-2 shadow">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li>
                    <button onClick={handleLogout} className="btn btn-outline btn-sm">Logout</button>
                </li>
            </ul>
        </div>
    );
};

export default UserDropdown;