import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:"post",
    initialState:{
        addPost:false,
        deletePost:false
        },
    reducers:{
        setAddPost:(state,actions) => {
            state.addPost=actions.payload
        },
        setDeletePost: (state,actions) => {
            state.deletePost=actions.payload

        }
    }

})

export const {setAddPost,setDeletePost} = postSlice.actions
export const postReducer = postSlice.reducer