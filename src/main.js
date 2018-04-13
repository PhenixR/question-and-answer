import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import App from './App'
import store from './store/'
import ajax from './config/ajax'


Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
	components: { App },
	template: '<App/>'
  }).$mount('#app')