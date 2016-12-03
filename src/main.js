import Vue from 'vue';
import App from './App.vue';
require("!style-loader!css-loader!sass-loader!../styles.scss");

new Vue({
  el: '#app',
  render: (h) => h(App)
});
