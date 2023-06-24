import React, { useEffect, useState } from "react";

const App4 = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
        alert("I'm Clicked");
        console.log("I'm licked");
    }, [num]);

    return (
        <>
            <button
                className="btn"
                onClick={() => {
                    setNum(num + 1);
                }}
            >
                <h1> Click me {num} </h1>
            </button>
            <br />
            <button
                className="btn"
                onClick={() => {
                    setNums(nums + 1);
                }}
            >
                <h1> Click me {nums} </h1>
            </button>
        </>
    );
};

export default App4;
