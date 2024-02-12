import { v4 as uuidv4 } from "uuid";

type RemoveFriendACType = ReturnType<typeof RemoveFriendAC>;

type FriendsActionsType = RemoveFriendACType;

let RemoveFriendAC = (id: string) => {
    return {
        type: "REMOVE_FRIEND",
        payload: {
            id,
        },
    } as const;
};

export type FriendsStateType = {
    id: string;
    name: string;
    surname: string;
    avatar: string;
    city: string;
    university: string;
}

let initialStateOfFriends = [
    {
        id: uuidv4(),
        name: "Frankey",
        surname: "Jackson",
        avatar: require("../assets/images/social.jpg"),
        city: "New Yourk",
        university: 'KISM',
    },
    {
        id: uuidv4(),
        name: "Frankey",
        surname: "Jackson",
        avatar: require("../assets/images/social.jpg"),
        city: "New Yourk",
        university: 'KISM',
    },
    {
        id: uuidv4(),
        name: "Frankey",
        surname: "Jackson",
        avatar: require("../assets/images/social.jpg"),
        city: "New Yourk",
        university: 'KISM',
    },
    {
        id: uuidv4(),
        name: "Frankey",
        surname: "Jackson",
        avatar: require("../assets/images/social.jpg"),
        city: "New Yourk",
        university: 'KISM',
    },
];

export const friendsReducer = (
    state = initialStateOfFriends,
    action: FriendsActionsType
) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
