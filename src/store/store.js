import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/userSlice";
import { postReducer } from "./post/postSlice";
import { tripReducer } from "./trip/tripSlice";


export const store = configureStore({
    reducer:{
        user:userReducer,
        post:postReducer,
        trip:tripReducer
    }
})