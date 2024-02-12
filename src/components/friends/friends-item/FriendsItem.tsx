import s from "./friends-item.module.scss";

type FriendsItemType = {
    name: string;
    surname: string;
    avatar: string;
    city: string;
    university: string;
};

export const FriendsItem = (props: FriendsItemType) => {
    return (
        <div className={s.friend_item}>
            <div className={s.friend_image}>
                <a href="#"></a>
                <img src={props.avatar} alt="#" />
            </div>
            <div className={s.friend_short_info}>
                <h6>
                    <a href="#">
                        {props.name} {props.surname}
                    </a>
                </h6>
                <p>
                    <span>City:</span> <a href="#">{props.city}</a>
                </p>
                <p>
                    <span>University:</span> <a href="#">{props.university}</a>
                </p>
            </div>
        </div>
    );
};
