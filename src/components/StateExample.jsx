import React, { useState } from "react";

const StateExample = () => {

    const [name,setName] = useState("");
    const [title, setTitle] = useState("");

    return(
        <div>

            

            <div>
                <label htmlFor="name">name : </label>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="title">Title : </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </div>

            <h2> Name : {name}</h2>
            <h2> Title : {title}</h2>

        </div>
    );
}

export default StateExample;

