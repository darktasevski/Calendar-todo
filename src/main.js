import Vue from 'vue';
import App from './App.vue';
// Fo(r)nt awesome config
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bulma/css/bulma.css';

library.add(faEdit);
library.add(faTrash);
library.add(faCheck);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');
