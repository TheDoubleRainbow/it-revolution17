eventsList = Vue.component('eventslist', {
	template: 
		`<div class="column is-8">
			<div v-for="game in list">
				<div class="eventslist-gamename">{{game.game}}</div>
				<div class="eventlist-event" v-for="event in game.events">
					<div class="columns is-centered">
					  	<div class="eventlist-img column is-1">
					  		<img src="https://avatars0.githubusercontent.com/u/15015118?s=460&v=4" />
					  	</div>
					  	<div class="eventlist-name column is-2">
					  		{{event.city}}
					  	</div>
					  	<div class="eventlist-name column is-6">
					  		{{event.name}}
					  	</div>
					  	<div class="eventlist-date column is-2">
					  		{{event.date}}
					  	</div>
					  	<div class="eventlist-rating column is-1">
					  		<div>
					  			<span>{{event.likes}}</span>
					  		</div>
					  	</div>
			  		</div>
				</div>
			</div>
		</div>
		`

,
	data: function(){
		return {
			list: [
			{game: "Overwatch", events: [
				{id: 0, game: "Overwatch", name: "Overwatch world cup", city: "London", likes: 322, date: "01.25.2018"},
				{id: 0, game: "Overwatch", name: "Overwatch League", city: "Toronto", likes: 322, date: "05.01.2018"}
			]},
			{game: "Counter Strike: Global Offensive", events: [
				{id: 0, game: "Counter Strike: Global Offensive", name: "Starladder", city: "Kyiv", likes: 322, date: "02.21.2018"},
				{id: 0, game: "Counter Strike: Global Offensive", name: "ESL", city: "Berlin", likes: 322, date: "01.14.2018"},
				{id: 0, game: "Counter Strike: Global Offensive", name: "WCG", city: "Boston", likes: 322, date: "08.30.2018"}

			]}
			]
		}
	}

});