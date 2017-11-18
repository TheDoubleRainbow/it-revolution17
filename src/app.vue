//Router = require("./lib/vue-router.min.js");
//Router = require("vue-router");
require("./lib/vuetify.js")
require("./vheader.vue")
require("./mainblock.vue")
require("./store.js");

Vue.use(Router)
const router = new Router({
	routes: [
		{ path: '/', component: Mainblock}
	]
})

app = new Vue({
	el: "#app",
	router: router,
	store: store,
	data: 
		{
		},
	methods: {
		getData: function(){
			//... 
		}
	}
})