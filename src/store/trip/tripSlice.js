import { createSlice } from "@reduxjs/toolkit";

const tripSlice = createSlice({
    name:"trip",
    initialState:{
      isNewTripAdded:false,  
    },
    reducers:{
        newTripStatus:(state,actions)=>{
            state.isNewTripAdded=actions.payload

        }
    }
})

export const {newTripStatus} = tripSlice.actions;
export const tripReducer = tripSlice.reducer