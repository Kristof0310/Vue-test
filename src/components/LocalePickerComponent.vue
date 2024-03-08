<template>
  <div class="top-4 right-2 absolute">
    <!-- Toggle A -->
    <div class="flex items-center justify-center w-full mb-12">
      <label for="toggleA" class="flex items-center cursor-pointer">
        <div class="mr-4 text-gray-700 font-medium">English</div>
        <div class="relative">
          <input
            id="toggleA"
            type="checkbox"
            class="sr-only"
            :checked="isChecked"
            @change="handleLocalLang"
          />
          <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div
            class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"
          ></div>
        </div>
        <div class="ml-3 text-gray-700 font-medium">French</div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const isChecked = ref(false);
const i18n = useI18n();

const handleLocalLang = () => {
  isChecked.value = !isChecked.value;
  if (isChecked.value) {
    i18n.locale.value = "fr";
  } else {
    i18n.locale.value = "en";
  }
};
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
