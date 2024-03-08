<template>
  <div class="py-4">
    <button
      @click="resetCounter"
      class="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      {{ $t("reset") }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["reset-counter"]);

const resetCounter = () => {
  emit("reset-counter");
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
