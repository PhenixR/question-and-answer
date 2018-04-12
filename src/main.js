import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import App from './App'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	components: { App },
	template: '<App/>'
  }).$mount('#app')