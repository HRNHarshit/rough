import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="error">
                <h1> Error 404 Page </h1>
                <p> Sorry, This Page doesn't Exist </p>

                <button onClick={goBack}> Go Back </button>
                <br/>
                <NavLink to="/"> Chal be Ghar nikal </NavLink>
            </div>
        </>
    );
};

export default Error;
