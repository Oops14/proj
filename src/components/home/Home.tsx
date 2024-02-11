import React from "react";
import s from "./home.module.scss";

// Import Bootstrap and its default variables
import "bootstrap/scss/bootstrap.scss";
import { HomeForm } from "../forms/HomeForm";
import { HomePost } from "./post/HomePost";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store";
import { AddPostAC, PostType, RemovePostAC } from "../../store/post-reducer";

export const Home = () => {
    let posts = useSelector<AppRootStateType, Array<PostType>>(
        (state) => state.postReducer
    );
    let dispatch = useDispatch();

    const addPost = (title: string) => {
        dispatch(AddPostAC(title));
    };

    const removePost = (postId: string) => {
        dispatch(RemovePostAC(postId));
    };

    return (
        <div className={s.home_main}>
            <div className={s.container}>
                <h1>Home</h1>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <HomeForm addPost={addPost} />
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
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </div>
    );
};
