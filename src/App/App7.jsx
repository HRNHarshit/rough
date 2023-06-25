import React from "react";
import { Route, Routes } from "react-router-dom";
import "../CSS/App7.css";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Error from "../Components/Error";

const App7 = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </>
    );
};

export default App7;
