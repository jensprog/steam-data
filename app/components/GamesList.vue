/* Reusable component for rendering games in a table, using pagination with 20 results per page. If the game has an
header image it will be displayed beside the games name */
<script setup>
const props = defineProps({
    items: Array,
    basePath: String,
});

const hasImages = computed(() => props.items?.some((item) => item.header_image));
</script>

<template>
    <div class="overflow-x-auto mt-6">
        <table class="table-auto mx-auto w-full max-w-2xl border-collapse">
            <thead>
                <tr class="bg-[#1b2838]">
                    <th v-if="hasImages" class="py-3 px-6 border-b border-[#2a475e] w-40"></th>
                    <th class="text-left text-[#66c0f4] font-semibold py-3 px-6 border-b border-[#2a475e]">Name</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in items"
                    :key="item.id"
                    class="border-b border-[#2a475e] hover:bg-[#1b2838] transition-colors duration-150">
                    <td v-if="hasImages" class="py-2 px-6 w-40">
                        <img :src="item.header_image" :alt="item.name" class="w-36 rounded" />
                    </td>
                    <td class="py-3 px-6">
                        <NuxtLink
                            :to="`${basePath}/${item.id}`"
                            class="text-[#c7d5e0] hover:text-[#66c0f4] transition-colors duration-150">
                            {{ item.name }}
                        </NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
