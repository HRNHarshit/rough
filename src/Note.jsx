import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./CSS/index2.css";

const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return (
        <>
            <div className="note">
                <h1> {props.title} </h1>
                <p> {props.content} </p>
                <button className="btn" onClick={deleteNote}>
                    <DeleteOutlineIcon className="delete" />
                </button>
            </div>
        </>
    );
};

export default Note;
