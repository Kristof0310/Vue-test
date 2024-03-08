<template>
  <div class="p-4 border border-gray-200">
    <h1 class="text-4xl text-blue-600">{{ $t("label") }}</h1>
    <div class="flex items-center space-x-4 mt-4">
      <button
        @click="counter--"
        class="px-3 py-1 bg-blue-500 text-white rounded-md"
      >
        {{ $t("minus") }}
      </button>
      <span>{{ counter }}</span>
      <button
        @click="counter++"
        class="px-3 py-1 bg-blue-500 text-white rounded-md"
      >
        {{ $t("plus") }}
      </button>
    </div>
    <ControlPaneComponent v-on:reset-counter="counter = 0" />
  </div>

  <MetricDisplayComponent :counter="counter"></MetricDisplayComponent>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MetricDisplayComponent from "./MetricDisplayComponent.vue";
import ControlPaneComponent from "./ControlPaneComponent.vue";

const counter = ref(0);
</script>

<style scoped></style>
