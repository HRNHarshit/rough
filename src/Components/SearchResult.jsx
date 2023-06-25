import React from "react";

const SearchResult = (props) => {
    const img = `https://api.unsplash.com/photos/random${props.name}`;

    return (
        <>
            <div>
                <img src={img} alt="Search" />
            </div>
        </>
    );
};

export default SearchResult;
