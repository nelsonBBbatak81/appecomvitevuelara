<template>
    <div class="max-w-md mx-auto">
        <div
            v-show="errorMsg"
            class="relative px-3 py-6 border border-red-400 rounded-md shadow-md transition-all"
        >
            <button
                @click="close"
                class="bg-transparent absolute top-0 right-0 text-black text-xl font-bold"
            >
                x
            </button>
            <p class="text-red-500 text-md font-bold">{{ message }}</p>
        </div>
        <div
            class="px-3 py-6 border border-solid border-slate-400 rounded-md shadow-md transition-all"
            v-show="successMsg"
        >
            <p class="text-slate-700 text-md font-bold">{{ message }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ["errorMsg", "successMsg", "message"],
    methods: {
        close() {
            this.errorMsg = !this.errorMsg;
        },
    },
};
</script>
