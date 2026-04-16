/* A reusable component to display a list of resources (like games, genres, etc.) in a table format. It takes an array
of items and a base path for the links. Each item is expected to have an 'id' and 'name' property. The component
generates a table where each row contains a link to the resource's detail page based on the provided base path. */
<script setup>
defineProps({
    items: Array,
    basePath: String,
});
</script>

<template>
    <div class="overflow-x-auto mt-6">
        <table class="table-auto mx-auto w-full max-w-2xl border-collapse">
            <thead>
                <tr class="bg-[#1b2838]">
                    <th class="text-left text-[#66c0f4] font-semibold py-3 px-6 border-b border-[#2a475e]">Name</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in items"
                    :key="item.id"
                    class="border-b border-[#2a475e] hover:bg-[#1b2838] transition-colors duration-150">
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
