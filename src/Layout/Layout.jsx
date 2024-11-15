import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

import Footer from "../Components/Footer";


const Layout = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer> 
            </div>
        </div>
    );
};

export default Layout;