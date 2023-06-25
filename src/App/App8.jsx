import React from "react";
import { Route, Routes } from "react-router-dom";
import "../CSS/index8.css";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Search from "../Components/Search";
import Error from "../Components/Error";

const App8 = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/Error" element={<Error />} />
            </Routes>
        </>
    );
};

export default App8;
