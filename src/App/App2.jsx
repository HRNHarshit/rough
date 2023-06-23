import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import CreateNode from "../CreateNode";
import Note from "../Note";

const App2 = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        // console.log(note);
        setAddItem((prevVal) => {
            return [...prevVal, note];
        });

        console.log(addItem);
    };

    const onDelete = (id) => {
        setAddItem((prevVal) => {
            return prevVal.filter((cuurData, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div>
                <Header />

                <CreateNode passNote={addNote} />

                {addItem.map((val, index) => {
                    return (
                        <Note
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                            deleteItem={onDelete}
                        />
                    );
                })}

                <Footer />
            </div>
        </>
    );
};

export default App2;
