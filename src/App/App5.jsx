import React, { useEffect, useState } from "react";

const App5 = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        document.title = `You click me ${num} times`;
    });

    return (
        <>
            <button
                onClick={() => {
                    return setNum(num + 1);
                }}
            >
                <h1> Click Me {num} </h1>
            </button>
        </>
    );
};

export default App5;
