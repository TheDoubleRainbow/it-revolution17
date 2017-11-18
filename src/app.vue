require("./lib/vuetify.js")
require("./vheader.vue")
require("./mainblock.vue")
require("./eventpage.vue")

Vue.use(Router)
const router = new Router({
	routes: [
		{ path: '/', component: mainblock}
	]
})

app = new Vue({
	el: "#app",
	router: router,
	data: 
		{
		},
	methods: {
		getData: function(){
			//... 
		}
	}
})