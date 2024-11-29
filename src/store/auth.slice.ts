import UserObject from "@/types/auth";
import axios from "@/utils/axios";
import { createSlice } from "@reduxjs/toolkit";
import ls from "localstorage-slim";
let user: string = ls.get("user", { decrypt: true }) || "";
const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        auth_user: user ? JSON.parse(user) : null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAuthUser: (state, action) => {
            state.auth_user = action.payload;
        },
        logout: (state) => {
            state.auth_user = null;
            ls.remove("access_token");
            ls.remove("refresh_token");
            ls.remove("user");
        },
    },
});

export const {
    setLoading,
    setAuthUser,
    logout,
} = authSlice.actions;

export default authSlice.reducer;


export const LoginAction = (payload: {
    username: string;
    password: string;
}) => async (dispatch: any) => {
    try {
        const data: UserObject = await axios.post("/auth/login", payload);
        if (data.accessToken && data.refreshToken) {
            ls.set("access_token", data.accessToken, { encrypt: true });
            ls.set("refresh_token", data.refreshToken, { encrypt: true });
            ls.set("user", JSON.stringify(data), { encrypt: true });
        }
        dispatch(setAuthUser(data));
    } catch (error) {
        console.log(error);
    }
};
