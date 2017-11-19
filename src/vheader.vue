vheader = Vue.component('vheader', {
	template: 
		`<div>
			<nav class="navbar" role="navigation" aria-label="main navigation">
			  <div @click="home" id="apptitle" class="column is-2 is-4-touch">
			  	CyberSport Eye
			  </div>
			  <div id="navbar-addevent" class="is-2 is-offset-8 is-hidden-touch column">
			  	<button @click="addevent" class="button is-primary">Add Event</button>
			  </div>
			</nav>
		</div>
		`,
	data: function(){
		return {
			
		}
	},
	methods: {
		addevent: function(){
			this.$router.push(`/addevent`)
		},
		home: function(){
			this.$router.push(`/`)
		}
	}

});