import React from "react";
import logo from "./Images/logo.png";

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} alt="Logo" width="90" height="90" />
                <h1> Keep Your Notes Safe Here... </h1>
            </div>
        </>
    );
};

export default Header;
