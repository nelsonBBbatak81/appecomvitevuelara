<template>
    <LayoutGuest>
        <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px]">
                <h1 class="text-xl font-bold text-center mb-">
                    Please Sign Up
                </h1>
                <form @submit.prevent="submit">
                    <div class="mb-5">
                        <label
                            for="name"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            v-model="form.name"
                            placeholder="Full Name"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            for="email"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            v-model="form.email"
                            placeholder="example@domain.com"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            for="password"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            v-model="form.password"
                            placeholder="Enter your password"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            for="password_confirmation"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Password Confirmation
                        </label>
                        <input
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                            v-model="form.c_password"
                            placeholder="Enter your password again"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div>
                        <button
                            class="hover:shadow-form rounded-md bg-[#6A64F1] w-full py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </LayoutGuest>
</template>
<script>
import axios from "axios";
import LayoutGuest from "../layout/LayoutGuest.vue";

export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                c_password: "",
            },
        };
    },
    components: {
        LayoutGuest,
    },
    methods: {
        async submit() {
            let data = {
                name: this.form.name,
                email: this.form.email,
                password: this.form.password,
                c_password: this.form.c_password,
            };
            console.log(data);
            await axios
                .post("/api/register", data)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>
