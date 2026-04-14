<script setup>
defineProps({
  items: Array,
  label: String,
});
</script>

<template>
  <div class="overflow-x-auto mt-6">
    <table class="table-auto mx-auto w-full max-w-2xl border-collapse">
      <thead>
        <tr class="bg-[#1b2838]">
          <th class="text-left text-[#66c0f4] font-semibold py-3 px-6 border-b border-[#2a475e]">Name</th>
          <th class="text-left text-[#66c0f4] font-semibold py-3 px-6 border-b border-[#2a475e]">{{ label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.name"
          class="border-b border-[#2a475e] hover:bg-[#1b2838] transition-colors duration-150"
        >
          <td class="py-3 px-6 text-[#c7d5e0]">{{ item.name }}</td>
          <td class="py-3 px-6 text-[#c7d5e0]">{{ item.game_count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
