import Vue from 'vue';

import App from './App.vue';
import Table from "./TableGG.vue";
import TicketsData from "../data/tickets.json"

new Vue({
    el: '#app',
    render: h => h(App)
});

new Vue({
    el: '.table-content',
    render: h => h(Table)
});
