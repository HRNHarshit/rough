import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "../CSS/index8.css";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Search from "../Components/Search";
import Error from "../Components/Error";

const App9 = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Search" element={<Search />} />

                {/* Ṣend to the Error Pag */}
                <Route path="*" element={<Error />} />

                {/* Send to home page when there is error */}
                {/* <Route path="*" element={<Navigate to='/' />} /> */}
            </Routes>
        </>
    );
};

export default App9;
