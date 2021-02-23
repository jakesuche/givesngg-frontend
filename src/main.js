import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import vuesax from 'vuesax'
import router from './router'
import 'vuesax/dist/vuesax.css'
import store from './store'
import AOS from "aos";
import "aos/dist/aos.css";
import 'material-icons/iconfont/material-icons.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import ProjectCreateModal from '@/components/givesCreate/ProjectCreateModal'
const options = {
  confirmButtonColor: '#5C5E8B',
  
};
Vue.component('ProjectCreateModal', ProjectCreateModal )
import '@/assets/fonts/raleway/fonts.css'
Vue.use(VueSweetalert2, options)

Vue.use(vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  
  created(){
    AOS.init({
      once:false
    })
  },
 
  render: h => h(App),
}).$mount('#app')

// import AOS from "aos";
// import "aos/dist/aos.css";
// app.AOS = new AOS.init({ disable: "phone" });