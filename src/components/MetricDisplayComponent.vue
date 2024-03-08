<template>
  <div class="bg-gray-200 p-4">
    <h2 class="text-lg font-medium">{{ $t("metricDisplay") }}</h2>
    <div class="mt-4">
      <p class="text-4xl font-semibold">{{ counter }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ counter: number }>();
</script>
