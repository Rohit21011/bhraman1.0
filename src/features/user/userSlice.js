import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    email: "",
    password: "",
    user_auth_token: "",
    isLogin: false,
  },
  reducers: {
    setUserName: (state, payload) => {
      state.userName = payload;
    },
    setPassword: (state, payload) => {
      state.password = payload;
    },
    setEmail: (state, payload) => {
      state.email = payload;
    },
    setUserAuthToken: (state, payload) => {
      state.user_auth_token = payload;
    },
    setIsLogin: (state, payload) => {
      state.isLogin = payload;
    },
  },
});

export const { setEmail, setPassword, setUserAuthToken, setUserName,setIsLogin } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
