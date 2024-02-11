import React from 'react';
import s from './banner.module.scss';
import logo from '../../w-vgs-adventure-hogwarts-legacy.jpg'

export const Banner = () => {
    return (
        <div className={s.main_banner}>
            <div className={s.banner_image}>
                <a href="#"></a>
                <img src={logo}/>
            </div>
            <div>
                <h5 className={s.banner_title}><a href="#">Banner Title</a></h5>
            </div>
        </div>
    );
};