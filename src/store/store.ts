import { combineReducers, legacy_createStore } from "redux";
import { postReducer } from "./post-reducer";
import { friendsReducer } from "./friends-reducer";

const rootReducer = combineReducers({
  postReducer: postReducer,
  friendsReducer: friendsReducer,
});

// непосредственно создаём store
export const store = legacy_createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>;
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
