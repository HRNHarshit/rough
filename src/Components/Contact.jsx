import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    return (
        <>
            <section>
                <h1> Contact Page</h1>
                <h3>
                    <button onClick={goToHome}> Go To Home Page... </button>
                </h3>
            </section>
        </>
    );
};

export default Contact;
