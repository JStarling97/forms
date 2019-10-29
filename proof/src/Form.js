import React from "react";
import "./App.css";

import { useState, useEffect } from "react";

const Form = props => {
    const [member, setMember] = useState({ name: "", email: ""});

    // sync with memberToEdit

    const handleChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // update state

        props.setTeam([...props.team, member]);

        // reset fields
        setMember({ name: "", email: ""});
    };

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label className="inputs">
                Name: 
        <input required
                    type="text"
                    name="name"
                    value={member.name}
                    onChange={e => handleChange(e)}
                />
            </label>

            <label className="inputs">
                Email: 
        <input required
                    type="text"
                    name="email"
                    value={member.email}
                    onChange={e => handleChange(e)}
                />
            </label>
            <button>Submit</button>
        </form>
    );
};

export default Form;
