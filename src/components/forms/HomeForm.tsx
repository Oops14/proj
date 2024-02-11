import { ChangeEvent, useState } from "react";
import s from "../home/home.module.scss";

import AddLinkIcon from "@mui/icons-material/AttachFile";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import Button from "@mui/material/Button";

type HomeFormType = {
    addPost: (title: string) => void;
}

export const HomeForm = (props: HomeFormType) => {
    let [desc, setDesc] = useState('');

    const addPostInfo = (e: ChangeEvent<HTMLInputElement>) => {
        let description = e.currentTarget.value;
        setDesc(description);
    }

    let addPost = () => {
        props.addPost(desc);
        setDesc('');
    }

    return (
        <>
            <form className={s.main_home_form}>
                <div className={s.form_input}>
                    <div className={s.account_icon}>
                        <img
                            src="https://www.svgrepo.com/show/217131/google.svg"
                            alt="#"
                        />
                    </div>
                    <input
                        type="text"
                        value={desc}
                        onChange={addPostInfo}
                        placeholder="Do you have something new?"
                    />
                    <Button variant="contained" onClick={addPost}>Add</Button>
                </div>
                <div className={s.form_attach}>
                    <AddLinkIcon className={s.attach_icon} />
                    <AddReactionOutlinedIcon className={s.attach_icon} />
                </div>
            </form>
        </>
    );
};
