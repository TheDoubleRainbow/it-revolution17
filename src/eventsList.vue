eventsList = Vue.component('eventslist', {
	template: 
		`<div class="column is-8-widescreen is-10-tablet">
			<div  class="eventfilter" v-if="list.length != 0">
				<div class="select">
				  <select @change="getEvents" v-model="sortby">
				    <option>Sort by games</option>
				    <option>Sort by cities</option>
				  </select>
				</div>
				<div v-if="sortby=='Sort by games'" class="select">
				  <select v-model="sort">
				    <option>All</option>
				    <option v-for="game in list" >{{game.game}}</option>
				  </select>
				</div>
				<div v-if="sortby=='Sort by cities'" class="select">
				  <select v-model="sort">
				    <option>All</option>
				    <option v-for="game in list">{{game.game}}</option>
				  </select>
				</div>
			</div>
			<div class="noitems" v-if="list.length == 0">Sorry, but there are no items to show.</div>
			<div v-if="game.game == sort || sort == 'All'" v-for="game in list">
				<div class="eventslist-gamename">{{game.game}}</div>
				<div @click="openEvent(event)" class="eventlist-event" v-for="event in game.events">
					<div class="columns is-centered">
					  	<div class="eventlist-img column is-1">
					  		<img class="eventslist-img-tag" :src="event.peacture" />
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
			sortby: "Sort by games",
			sort: "All",
			//sortcities: "All",
			/*list: [
			{game: "Overwatch", events: [
				{id: 0, game: "Overwatch", name: "Overwatch world cup", city: "London", likes: 322, date: "01.25.2018"},
				{id: 0, game: "Overwatch", name: "Overwatch League", city: "Toronto", likes: 322, date: "05.01.2018"}
			]},
			{game: "Counter Strike: Global Offensive", events: [
				{id: 0, game: "Counter Strike: Global Offensive", name: "Starladder", city: "Kyiv", likes: 322, date: "02.21.2018"},
				{id: 0, game: "Counter Strike: Global Offensive", name: "ESL", city: "Berlin", likes: 322, date: "01.14.2018"},
				{id: 0, game: "Counter Strike: Global Offensive", name: "WCG", city: "Boston", likes: 322, date: "08.30.2018"}

			]}
			]*/
			list: []
		}
	},
	created: function(){
		this.getEvents();
	},
	methods: {
		openEvent: function(event){
			this.$router.push(`/event/${event.id}`)
		},
		getEvents: function(){
			this.sort = 'All';
			var that = this;
			that.list = [];
			axios.get(`/api/events`)
                      .then(function (response){
                      	console.log(response);
                        response.data.forEach(function(item, i, arr) {
                        	if(that.sortby == "Sort by games"){
	                            var found = false;
	                            that.list.forEach(function(item1, i1, arr1){
	                                if(item1.game == item.game){
	                                    that.list[i1].events.push({id: item._id, game: item.game, name: item.name, city: item.city, likes: item.rating, date: item.date, description: item.description, peacture: item.peacture, link: item.link});
	                                    found = true;
	                                }
	                            })
	                            if(found == false){
	                                //var subtype = typeArray[1];// ? typeArray[1];
	                                that.list.push({game: item.game, events: [{id: item._id, game: item.game, name: item.name, city: item.city, likes: item.rating, date: item.date, description: item.description, peacture: item.peacture, link: item.link }]});
	                            }
	                        }
	                        if(that.sortby == "Sort by cities"){
	                        	var found = false;
	                            that.list.forEach(function(item1, i1, arr1){
	                                if(item1.game == item.city){
	                                    that.list[i1].events.push({id: item._id, game: item.game, name: item.name, city: item.city, likes: item.rating, date: item.date, description: item.description, peacture: item.peacture, link: item.link});
	                                    found = true;
	                                }
	                            })
	                            if(found == false){
	                                //var subtype = typeArray[1];// ? typeArray[1];
	                                that.list.push({game: item.city, events: [{id: item._id, game: item.game, name: item.name, city: item.city, likes: item.rating, date: item.date, description: item.description, peacture: item.peacture, link: item.link }]});
	                            }
	                        }
                        });
                      })
                      .catch(function (error) {
                        that.list = [];
                        console.log(error);
                     });
		}
	}
});