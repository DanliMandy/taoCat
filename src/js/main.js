import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import searchInput from '../vue/searchInput.vue';
import navBar from  '../vue/navBar.vue';
import focus from  '../vue/carousel.vue';
Vue.use(ElementUI);

new Vue({
    render: h =>h(searchInput)
}).$mount('#searchInput');

new Vue({
    render: h =>h(navBar)
}).$mount('#navBar');

new Vue({
    render: h => h(focus)
}).$mount('.focus-bd')