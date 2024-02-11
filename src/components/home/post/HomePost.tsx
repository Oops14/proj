import React, {useState} from "react";
import s from "./post.module.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import {useDispatch} from "react-redux";
import {EditPostAC} from "../../../store/post-reducer";

type HomePostType = {
    postId: string;
    postTitle: string;
    postDesc: string;
    removePost: (postId: string) => void;
}

export const HomePost = (props: HomePostType) => {
    const [openMoreBtn, setMoreBtn] = useState(false);
    const [isPostEdited, setEditedPost] = useState(false);
    const [newDescription, setNewDescription] = useState(props.postDesc);
    let dispatch = useDispatch();

    const openMoreBtnDropdown = () => {
        setMoreBtn(!openMoreBtn);
    }

    /*
     * TODO: Define the "ref" for the "More" button and make func. such as onBlur for the Dropdown
     * https://stackoverflow.com/questions/62681722/react-hide-dropdown-menu-when-lose-focus
     */
    const disableDropdownOnFocusLose = () => {
        console.log('Input blurred');
    }

    // Remove Post.
    const removePost = () => {
        props.removePost(props.postId);
    }

    // Edit Post
    const editPost = (postId: string) => {
        setMoreBtn(false);
        setEditedPost(true);
    }

    // Override the old text and set a new one.
    const defineNewDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        setNewDescription(text);
    }

    const submitNewDescription = () => {
        dispatch(EditPostAC(props.postId, newDescription));
        setNewDescription(newDescription);
        setEditedPost(false);
    }

    return (
        <div className={s.post_item}>
            {isPostEdited ? (
                <>
                    <div className={s.post_header_panel + ' ' + s.in_editing}>
                        <div className={s.account_icon}>
                            <img
                                src="https://www.svgrepo.com/show/217131/google.svg"
                                alt="#"
                            />
                            <h6 className={s.acc_title}>{props.postTitle}</h6>
                        </div>
                        <div className={s.post_buttons_block}>
                            <MoreHorizOutlinedIcon className={openMoreBtn ? s.btn : s.btn + ' ' + s.acite_dropdown}
                                                   onClick={openMoreBtnDropdown}
                                                   onBlur={disableDropdownOnFocusLose}/>

                            {openMoreBtn && <PostDropdown editPost={editPost} postId={props.postId}/>}
                            <CloseOutlinedIcon onClick={removePost} className={s.btn}/>
                        </div>
                    </div>
                    <textarea className={s.post_textarea} value={newDescription} onChange={defineNewDescription}></textarea>
                    <div className={s.submit_block}>
                        <button className={s.submit_edited_post} onClick={submitNewDescription}>Submit</button>
                    </div>
                </>
            ) : (
                <>
                    <div className={s.post_header_panel}>
                        <div className={s.account_icon}>
                            <img
                                src="https://www.svgrepo.com/show/217131/google.svg"
                                alt="#"
                            />
                            <h6 className={s.acc_title}>{props.postTitle}</h6>
                        </div>
                        <div className={s.post_buttons_block}>
                            <MoreHorizOutlinedIcon className={openMoreBtn ? s.btn : s.btn + ' ' + s.acite_dropdown}
                                                   onClick={openMoreBtnDropdown}
                                                   onBlur={disableDropdownOnFocusLose}/>

                            {openMoreBtn && <PostDropdown editPost={editPost} postId={props.postId}/>}
                            <CloseOutlinedIcon onClick={removePost} className={s.btn}/>
                        </div>
                    </div>
                    <p>
                        {props.postDesc}
                    </p>
                </>
            )}
        </div>
    );
};

type PostDropdownType = {
    postId: string;
    editPost: (postId: string) => void;
}

const PostDropdown = (props: PostDropdownType) => {

    const editPost = () => {
        props.editPost(props.postId);
    }

    return (
        <div className={s.btn_more_dropdown}>
            <div className={s.dropdown_item} onClick={editPost}>Edit Post</div>
        </div>
    );
}