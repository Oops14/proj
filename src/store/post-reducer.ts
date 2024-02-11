import {v4 as uuidv4} from "uuid";

type AddPostACType = ReturnType<typeof AddPostAC>;
type RemovePostACType = ReturnType<typeof RemovePostAC>;
type EditPostACType = ReturnType<typeof EditPostAC>;

type ActionsType = AddPostACType | RemovePostACType | EditPostACType;

export type PostType = {
    id: string;
    accountTitle: string;
    accountImage: string;
    postDescription: string;
};

let initialState: Array<PostType> = [
    {
        id: uuidv4(),
        accountTitle: "Admin",
        accountImage: "https://www.svgrepo.com/show/217131/google.svg",
        postDescription:
            "Laghi di Fusine,Friuli-Venezia Giulia,Italy. Laghi di Fusine,Friuli-Venezia" +
            "Giulia,Italy. Laghi di Fusine,Friuli-Venezia Giulia,Italy. Laghi di Fusine,Friuli-Venezia Giulia,Italy.",
    },
];

export let AddPostAC = (description: string) => {
    return {
        type: "ADD_POST",
        payload: {
            description,
        },
    } as const;
};

export let RemovePostAC = (postId: string) => {
    return {
        type: "REMOVE_POST",
        payload: {
            postId
        },
    } as const;
};

export let EditPostAC = (postId: string, newDesc: string) => {
    return {
        type: "EDIT_POST",
        payload: {
            postId, newDesc
        },
    } as const;
};

export const postReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD_POST": {
            let newValue = {
                id: uuidv4(),
                accountTitle: "Admin",
                accountImage: "https://www.svgrepo.com/show/217131/google.svg",
                postDescription: action.payload.description,
            };
            return [...state, newValue];
        }
        case "REMOVE_POST": {
            return state.filter(post => post.id !== action.payload.postId);
        }
        case "EDIT_POST": {
            return state.map(post => post.id === action.payload.postId ? {...post, postDescription: action.payload.newDesc } : post);
        }
        default: {
            return state;
        }
    }
};
