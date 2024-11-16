import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Pages/Loading";
import useUserData from "../../Hooks/useUserData";


// eslint-disable-next-line react/prop-types
const SellerRoute = ({children}) => {
    const { user, loading } = useAuth ();
    const userData = useUserData()
    const loacation = useLocation()
    if (loading || !userData.role) {
        return <Loading></Loading>
    }
    if (user && userData.role === "Seller") {
        return children
    }
    return <Navigate to="/" state={{ form: loacation }} replace/>
};

export default SellerRoute;