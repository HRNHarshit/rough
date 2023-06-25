import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const goTocontact = () => {
        navigate("/contact");
    };

    return (
        <>
            <section>
                <h1> About Page </h1>
                <h3>
                    <button onClick={goTocontact}> Go To Contact</button>
                </h3>
            </section>
        </>
    );
};

export default About;
