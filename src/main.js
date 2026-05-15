// Application entry point.
// Imports global CSS tokens before mounting so all components
// can consume the design variables from the start.
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tokens.css";

createApp(App).mount("#app");
