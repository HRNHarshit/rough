import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNode = (props) => {
    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setNote((prevVal) => {
            return { ...prevVal, [name]: value };
        });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({ title: "", content: "" });
    };

    const expandIt = () => {
        setExpand(true);
    };

    const shrinkIt = () => {
        setExpand(false);
    };

    return (
        <>
            <div
                className="main_note"
                onClick={expandIt}
                onDoubleClick={shrinkIt}
            >
                <form>
                    {expand ? (
                        <input
                            type="text"
                            name="title"
                            value={note.title}
                            onChange={InputEvent}
                            placeholder="Title"
                            autoComplete="off"
                        />
                    ) : null}
                    <textarea
                        rows=""
                        cols=""
                        name="content"
                        value={note.content}
                        onChange={InputEvent}
                        placeholder="Write your note..."
                    ></textarea>
                    {expand ? (
                        <Button className="Mui-Button-root" onClick={addEvent}>
                            <AddIcon className="plus_sign" />
                        </Button>
                    ) : null}
                </form>
            </div>
        </>
    );
};

export default CreateNode;
