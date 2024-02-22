import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navigation.module.scss";

const pages = [
    { title: "Home", navlink: "/home" },
    { title: "Friends", navlink: "/friends" },
    { title: "Groups", navlink: "/groups" },
    { title: "Messages", navlink: "/messages" },
    { title: "Profile", navlink: "/my-profile" },
    { title: "Account", navlink: "/my-account" },
];

export const Navigation = () => {
    return (
        <div>
            <ul className={s.nav_menu}>
                {pages.map((page, index) => {
                    return (
                        <li key={index} className={s.nav_item}>
                            <NavLink
                                to={page.navlink}
                                className={({ isActive }) =>
                                    isActive ? s.active : ""
                                }
                            >
                                {page.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};