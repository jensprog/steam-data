*/ Component that uses an Apache Echarts pie to display price range for all games in the dataset. */
<script setup>
import * as echarts from "echarts";

const chartRef = ref(null);
const { data } = await useFetch("/api/stats/games/by-price");

onMounted(() => {
  const chart = echarts.init(chartRef.value, null, { renderer: "svg" });
  chart.setOption({
    backgroundColor: "#1b2838",
    title: {
      text: "Games by Price",
      left: "center",
      textStyle: { color: "#c7d5e0" },
    },
    tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
    series: [
      {
        type: "pie",
        radius: "65%",
        data: data.value,
        label: { color: "#c7d5e0" },
        emphasis: {
          itemStyle: { shadowBlur: 10, shadowColor: "rgba(0,0,0,0.5)" },
        },
      },
    ],
  });
});
</script>

<template>
  <div ref="chartRef" class="w-full h-96 rounded" />
</template>
