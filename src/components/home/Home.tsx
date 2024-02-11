import React from "react";
import s from "./home.module.scss";

// Import Bootstrap and its default variables
import "bootstrap/scss/bootstrap.scss";
import {HomeForm} from "../forms/HomeForm";
import {HomePost} from "./post/HomePost";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {AddPostAC, PostType, RemovePostAC} from "../../store/post-reducer";
import {ContactItem} from "../contacts/ContactItem";
import {Banner} from "../banner/Banner";

export const Home = () => {
    let posts = useSelector<AppRootStateType, Array<PostType>>(
        (state) => state.postReducer
    );
    let dispatch = useDispatch();

    console.log(posts);

    const addPost = (title: string) => {
        if (title.trim() !== '') {
            dispatch(AddPostAC(title));
        } else {
            alert("The Post cannot be empty!")
        }
    };

    const removePost = (postId: string) => {
        dispatch(RemovePostAC(postId));
    };

    return (
        <div className={s.home_main}>
            <div className={s.container}>
                <div className="row">
                    <div className="col-lg-2">
                        {/*
                         * TODO: Add additional functionality for banners (props, etc.)
                         */}
                        <Banner/>
                        <Banner/>
                    </div>
                    <div className="col-lg-8">
                        <HomeForm addPost={addPost}/>
                        {posts.map((post) => {
                            return (
                                <HomePost
                                    key={post.id}
                                    postId={post.id}
                                    postTitle={post.accountTitle}
                                    postDesc={post.postDescription}
                                    removePost={removePost}
                                />
                            );
                        })}
                    </div>
                    <div className="col-lg-2">
                        <h5 className={s.contacts_section_title}>Contacts</h5>
                        {/*
                         * TODO: Add functionality to show contacts that depends on data.
                         */}
                        <ContactItem/>
                        <ContactItem/>
                        <ContactItem/>
                    </div>
                </div>
            </div>
        </div>
    );
};
