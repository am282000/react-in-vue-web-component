import Vue from "vue";
import App from "./App.vue";

// Tell Vue to ignore custom elements with the name "my-web-component"
// Vue.config.ignoredElements = ["my-web-component"];

new Vue({
  el: "#app",
  render: (h) => h(App),
});
