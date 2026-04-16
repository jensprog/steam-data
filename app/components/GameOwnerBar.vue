/* Component that renders a bar chart for number of games with players. Uses Apache Echarts for the bar chart. */
<script setup>
import * as echarts from "echarts";

const chartRef = ref(null);
const { data } = await useFetch("/api/stats/games/by-owners");

onMounted(() => {
    const chart = echarts.init(chartRef.value, null, { rendered: "svg" });
    chart.setOption({
        backgroundColor: "1b2838",
        title: {
            text: "Number of games with players",
            left: "center",
            textStyle: { color: "#c7d5e0" },
        },
        xAxis: {
            type: "category",
            data: data.value.map((item) => item.name),
            axisLabel: { rotate: 45, color: "#c7d5e0" },
        },
        yAxis: {
            type: "value",
            axisLabel: { color: "#c7d5e0" },
        },
        tooltip: { trigger: "item" },
        series: [
            {
                type: "bar",
                data: data.value.map((item) => item.value),
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
    <div ref="chartRef" class="w-full h-96" />
</template>
