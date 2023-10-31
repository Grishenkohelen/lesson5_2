import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/users'}>users</NavLink>
            <NavLink to={'/details'}>details</NavLink>
            <NavLink to={'/post'}>post</NavLink>
        </div>
    );
};

export default Header;