import { createSlice } from "@reduxjs/toolkit";

 const user = createSlice({
    name:"user",
    initialState:{
        error: null,
        userInfo: {},
        username: null,
        userId: null,
        accessToken: null
    },
    reducers: {
        setUserInfo: (store, action) => {
            store.userInfo = action.payload;
          },
        setUsername: (store, action) => {
            store.username = action.payload;
        },
        setError: (store, action) => {
            store.error = action.payload;
        },
        setUserId: (store, action) => {
            store.userId = action.payload;
        },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload;
        }
    }
});
export default user;