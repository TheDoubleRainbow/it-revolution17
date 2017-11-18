require("./topevents.vue");
sidebar = Vue.component('sidebar', {
	template: 
		`
			<div id="sidebarsblock" class="column is-3 tablet-is-12 desktop-is-12">
				<topevents></topevents>
			</div>
		`,
	data: function(){
		return {
			
		}
	}
});