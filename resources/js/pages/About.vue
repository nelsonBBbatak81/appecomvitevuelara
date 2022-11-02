<template>
    <LayoutGuest>
        <img
            src="../assets/images/adidas.png"
            alt="Image adidas"
            class="w-24 h-16"
        />
        <h1 class="text-2xl font-bold">About Page</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            laborum est aspernatur voluptatibus libero temporibus repellendus
            reiciendis fugiat inventore accusantium.
        </p>
        <h3 class="text-blue-300 px-3 py-3 bg-slate-400">Hello Nelson</h3>
        <p class="px-2 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            expedita iste ipsam iusto sunt, ad deserunt itaque nesciunt ipsa ab
            numquam, libero nemo incidunt atque, similique exercitationem est
            facere minima.
        </p>
    </LayoutGuest>
</template>
<script>
import LayoutGuest from "../layout/LayoutGuest.vue";

export default {
    components: {
        LayoutGuest,
    },
};
</script>
