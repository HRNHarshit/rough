import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/"> Home </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"> About </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact"> Contact </NavLink>
                        </li>
                        <li>
                            <NavLink to="/search"> Search </NavLink>
                        </li>
                        <li>
                            <Link to="*"> Error </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
