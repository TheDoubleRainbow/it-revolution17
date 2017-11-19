require("./topevents.vue");
require("./lastcomments.vue");
sidebar = Vue.component('sidebar', {
	template: 
		`
			<div id="sidebarsblock" class="column is-3 tablet-is-12 desktop-is-12">
				<topevents></topevents>
				<lastcomments></lastcomments>
			</div>
		`,
	data: function(){
		return {
			
		}
	}
});