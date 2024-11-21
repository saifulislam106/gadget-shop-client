/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";
import Loading from "../../Pages/Loading";


const BuyerRoute = ({children}) => {
    const { user, loading } = useAuth ();

    const userData = useUserData()
    const loacation = useLocation()
    
    if (loading || !userData.role) {
        return <Loading></Loading>
    }
    if (user && userData.role === "Buyer") {
        return children
    }
    return <Navigate to="/login" state={{ form: loacation }} replace/>
};

export default BuyerRoute;