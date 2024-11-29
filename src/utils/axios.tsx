import axios from "axios";
import Toast from "./Toast";
import ls from "localstorage-slim";

export const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
});


axiosInstance.interceptors.request.use((config) => {
    config.headers.set("Content-Type", "application/json");
    config.headers.set("Authorization", `Bearer ${ls.get("access_token", { decrypt: true })}`);
    return config;
});

axiosInstance.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    if (error.response.status === 401) {
        Toast.error("Session expired, please login again");
        ls.remove("access_token");
        ls.remove("refresh_token");
        ls.remove("user");
        window.location.href = "/login";
    }
    return Promise.reject(error);
});

export default axiosInstance;
