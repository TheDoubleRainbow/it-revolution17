require("./eventsList.vue")
require("./sidebar.vue")
mainblock = Vue.component('mainblock', {
	template: 
		`
			<div class="columns is-centered">
				<eventslist></eventslist>
				<sidebar></sidebar>
			</div>
		`,
	data: function(){
		return {
			
		}
	}
});