import { useSelector } from "react-redux";
import { FriendsItem } from "./friends-item/FriendsItem";
import s from "./friends.module.scss";
import "bootstrap/scss/bootstrap.scss";
import { FriendsStateType } from "../../store/friends-reducer";
import { AppRootStateType } from "../../store/store";

export const Friends = () => {
    let myFriends = useSelector<AppRootStateType, Array<FriendsStateType>>(
        (state) => state.friendsReducer
    );

    return (
        <section className={s.section_friends}>
            <div className={s.container}>
                <h2>My Friends</h2>
                <div className="row">
                    {myFriends.map((item) => {
                        return (
                            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                                <FriendsItem name={item.name} surname={item.surname} avatar={item.avatar} city={item.city} university={item.university}/>
                            </div>
                        );
                    })}
                </div>

                <div className={s.may_know_friends}>
                    <h2>Friends you may know</h2>
                </div>
            </div>
        </section>
    );
};
