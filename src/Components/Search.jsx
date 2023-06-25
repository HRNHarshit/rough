import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {
    const [img, setImg] = useState("");

    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(img);
        setImg(data);
    };

    return (
        <>
            <div className="searchBar">
                <input
                    type="text"
                    placeholder="Search Anything"
                    value={img}
                    onChange={inputEvent}
                />
            </div>
            {img === "" ? null :  <SearchResult name={img} />}
        </>
    );
};

export default Search;
