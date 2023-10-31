import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/usersService";
import User from "./user";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        usersService.getAll().then(({data}) => setUsers(data));
    },[])

    return (
        <div>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export default Users;