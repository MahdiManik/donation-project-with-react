import { NavLink } from "react-router-dom";

NavLink

const Nav = () => {
    return (
        <div className="container mx-auto">
            <nav className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <img src="../../../../public/Logo.png" alt="" />
                <ul className="flex gap-6 font-semibold">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-red-500" : ""
                        }>
                            Home
                        </NavLink>

                    </li>

                    <li>
                        <NavLink to="/donation" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-red-500" : ""
                        }>
                            Donation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/static" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-red-500" : ""
                        }>
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;