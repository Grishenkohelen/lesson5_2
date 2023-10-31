import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {

    const {id, username, name, email} = user;
    const navigate = useNavigate();

    return (
        <div>
            <div>{id}</div>
            <div>{username}</div>
            <div>{name}</div>
            <div>{email}</div>
            <button onClick={() => navigate(`details/${id}`)}>Details</button>
            <hr/>
        </div>
    );
};

export default User;