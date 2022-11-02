import { defineStore } from "pinia";
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster();

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        user: {},
    }),
    actions: {
        init() {},
        async signinUser({ email, password }) {
            await axios
                .post("/api/login", { email, password })
                .then((res) => {
                    console.log(res);
                    this.user = res.data.data.user;
                    localStorage.setItem("token", res.data.data.token);
                    toaster.success(res.data.message);
                })
                .catch((err) => {
                    console.log(err);
                    toaster.error(err.response.data.message);
                });
        },
        async signoutUser() {
            console.log(localStorage.getItem("token"));
            axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
                "token"
            )}`;
            axios.defaults.headers.common.Accept = "application/json";
            await axios
                .post("/api/logout")
                .then((res) => {
                    console.log(res);
                    this.user = {};
                    toaster.success("Logout successfully!");
                })
                .catch((err) => {
                    console.log(err);
                    toaster.error("Logout failure!");
                });
        },
    },
});
