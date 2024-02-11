import React from 'react';
import s from './contact.module.scss';

export const ContactItem = () => {
    return (
        <div className={s.contact_item}>
            <div className={s.contact_avatar}>
                <img src="https://www.svgrepo.com/show/217131/google.svg" alt="#"/>
            </div>
            <div>
                <span className={s.contact_name}>Contact Name</span>
            </div>
        </div>
    );
};