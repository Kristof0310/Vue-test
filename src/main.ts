import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import en from "./lang/en.json";
import fr from "./lang/fr.json";
import "tailwindcss/tailwind.css";

const i18n = createI18n({
  locale: "en",
  legacy: false,
  messages: {
    en,
    fr,
  },
});

const app = createApp(App);

app.use(i18n);
app.mount("#app");
