/* Reusable component for detail pages that displays a resource's name and a list of related links in a table. */
<script setup>
defineProps({
    links: Array,
    name: String,
    label: String,
});
</script>

<template>
    <div>
        <h1 v-if="name" class="text-3xl font-bold text-[#66c0f4] mb-2">{{ name }}</h1>
        <div class="overflow-x-auto mt-6">
            <table class="table-auto mx-auto w-full max-w-2xl border-collapse">
                <thead>
                    <tr class="bg-[#1b2838]">
                        <th v-if="links?.some(l => l.header_image)" class="py-3 px-6 border-b border-[#2a475e] w-40"></th>
                        <th class="text-left text-[#66c0f4] font-semibold py-3 px-6 border-b border-[#2a475e]">
                            {{ label }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="link in links"
                        :key="link.href"
                        class="border-b border-[#2a475e] hover:bg-[#1b2838] transition-colors duration-150">
                        <td v-if="links?.some(l => l.header_image)" class="py-2 px-6 w-40">
                            <img v-if="link.header_image" :src="link.header_image" :alt="link.title" class="w-36 rounded" />
                        </td>
                        <td class="py-3 px-6">
                            <NuxtLink
                                :to="link.href"
                                class="text-[#c7d5e0] hover:text-[#66c0f4] transition-colors duration-150">
                                {{ link.title.replace(`${label}: `, "") }}
                            </NuxtLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
