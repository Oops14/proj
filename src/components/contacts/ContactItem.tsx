import React from "react";
import s from "./contact.module.scss";

type ContactItemType = {
    name: string;
    surname: string;
    avatar: string;
};

export const ContactItem = (props: ContactItemType) => {
    return (
        <div className={s.contact_item}>
            <a href="#"></a>
            <div className={s.contact_avatar}>
                <img src={props.avatar} alt="#" />
            </div>
            <div>
                <span className={s.contact_name}>
                    {props.name} {props.surname}
                </span>
            </div>
        </div>
    );
};
