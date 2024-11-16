import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";


const sellerRoutes = [
    {
        id: 1,
        title: "My Products",
        routes :"/dashboard/my-products",
    },
    {
        id: 2,
        title: "Add Products",
        routes :"/dashboard/add-products",
    },
]

const Sidebar = () => {
    const {LogoutUser} = useAuth();
    const userData =useUserData();
    console.log(userData);
    return (
        <div className="bg-gray-200 border-r border-black min-h-screen px-8 py-16">
            <h2 className="font-bold text-2xl mb-4">Gadget Shop</h2>
            <ul className="flex flex-col gap-2">
                <li><NavLink to="/dashboard/overview">Overview</NavLink></li>
                {
                    userData.role === "Seller" && sellerRoutes.map((route)=>(
                        <li key={route.id}><NavLink to={route.routes}>{route.title}</NavLink></li>
                    ))
                }
                <li><NavLink to="/">Home</NavLink></li>
                <li onClick={LogoutUser}><button>Logout</button></li>
            </ul>
            
        </div>
    );
};

export default Sidebar;