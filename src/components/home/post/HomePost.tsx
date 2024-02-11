import React from "react";
import s from "./post.module.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

type HomePostType = {
    postId: string;
    postTitle: string;
    postDesc: string;
    removePost: (postId: string) => void;
}

export const HomePost = (props: HomePostType) => {

    const removePost = () => {
        props.removePost(props.postId);
    }

    return (
        <div className={s.post_item}>
            <div className={s.post_header_panel}>
                <div className={s.account_icon}>
                    <img
                        src="https://www.svgrepo.com/show/217131/google.svg"
                        alt="#"
                    />
                    <h6 className={s.acc_title}>{props.postTitle}</h6>
                </div>
                <div>
                    <MoreHorizOutlinedIcon className={s.btn} />
                    <CloseOutlinedIcon onClick={removePost} className={s.btn} />
                </div>
            </div>
            <p>
                {props.postDesc}
            </p>
        </div>
    );
};
