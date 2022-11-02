<template>
    <LayoutAdmin>
        <router-link to="/" class="bg-red-400 text-black px-4 py-4 border"
            >Back Home</router-link
        >
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam
            sint impedit dolore accusamus cumque amet repudiandae minima
            laborum, soluta ullam omnis maiores atque libero aspernatur non
            commodi a architecto?
        </p>
    </LayoutAdmin>
</template>
<script>
import LayoutAdmin from "../../layout/LayoutAdmin.vue";

export default {
    components: {
        LayoutAdmin,
    },
};
</script>
