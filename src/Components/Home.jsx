import React from "react";
import Header from "./Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const pathAddress = useLocation();

    const goBack = () => {
        navigate(-1);
    };

    const goToAbout = () => {
        navigate("/about");
    };

    return (
        <>
            <Header />
            <Outlet />
            {pathAddress.pathname === "/" ? (
                <div>
                    <h1> Home Page </h1>
                    <button onClick={goToAbout}> Go To About </button>
                </div>
            ) : null}
            <br />
            <button onClick={goBack}> Go Back </button>
        </>
    );
};

export default Home;
