import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav/Nav";




const MainLayout = () => {



    return (
        <div className="container mx-auto mt-6">
            <Nav></Nav>
            <div className="py-10">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;