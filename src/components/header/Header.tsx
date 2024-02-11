import React from "react";
import s from "./header.module.scss";
import { Navigation } from "../navigation/Navigation";

export const Header = () => {
    return (
        <div className={s.header_main}>
            <div className={s.container}>
                <Navigation />
            </div>
        </div>
    );
};
