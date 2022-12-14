import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes/routes";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { store } from "./store/store";
import moment from 'moment';
import VueMeta from 'vue-meta';

//Vue meta setup in main.js
Vue.use(VueMeta)

Vue.config.productionTip = false;

Vue.prototype.moment = moment
axios.defaults.baseURL = "https://techcrunch.com/wp-json/wp/v2/";

//FontAwesome setup in main.js
library.add();
Vue.component("font-awesome-icon", FontAwesomeIcon);

//Axios setup in main.js
Vue.use(VueAxios, axios);

//vue router setup in main.js
Vue.use(VueRouter);
const router = new VueRouter({
    routes: routes,
    mode: "history",
    // fix for scroll to top
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 };
    },
});

new Vue({
    render: (h) => h(App),
    router,
    store: store
}).$mount("#app");