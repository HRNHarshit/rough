import React, { createContext } from "react";
import CompA from "../Components/CompA";

const FirstName = createContext();
const LastName = createContext();

const App3 = () => {
    return (
        <>
            <FirstName.Provider value={"Harshit"}>
                <LastName.Provider value={"HRN"}>
                    <CompA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
};

export default App3;
export { FirstName, LastName };
