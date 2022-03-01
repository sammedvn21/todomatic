import React from "react";
import {useState} from "react";


function Form(props){
    // console.log(props);
    const [name,setName]=useState("");

    function handleChange(e){
        setName(e.target.value);
    }

    function handelSubmit(e){
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    return(
        <form onSubmit={handelSubmit}>
            <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
            </label>
            </h2>
            <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
            Add
            </button>
        </form>
    );
}
export default Form;