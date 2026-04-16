/* Reusable component to display related resources, such as games related to a genre. Takes an array of links and a
label to display. */
<script setup>
defineProps({
    links: Array,
    label: String,
});
</script>

<template>
    <div>
        <ul>
            <li v-for="link in links" :key="link.href">
                <strong>{{ label }}: </strong>
                <NuxtLink :to="link.href">{{ link.title.replace(`${label}: `, "") }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
