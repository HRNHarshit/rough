import React from "react";
import { Link, NavLink } from "react-router-dom";
import Menu from "./Menu";

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
                            <Link to="*"> Error </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
