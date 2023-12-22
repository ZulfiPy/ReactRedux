import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./features/usersSlice";
 

const UserInput = () => {
    const [username, setUsername] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();

    const canAdd = Boolean(username) && Boolean(surname) && Boolean(address);
    
    const onAddUser = () => {
        if (canAdd) {
            dispatch(addUser(username, surname, address));

            setUsername("");
            setSurname("");
            setAddress("");
        }
    }

    return (
        <>
            <label htmlFor="firstName">name:</label>
            <input id="firstName" name="firstName" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="surname">surname:</label>
            <input id="surname" name="surname" type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            <label htmlFor="address">address:</label>
            <input id="address" name="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>

            <button type="button" disabled={!canAdd} onClick={onAddUser}>add user</button>
        </>
    )
}

export default UserInput;