import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Components/About";
import Contact from "../Components/Contact";

const App7 = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<Contact />} />
                <Route path="/contact" element={<div> Contact Page </div>} />
            </Routes>
        </>
    );
};

export default App7;
