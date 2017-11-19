topevents = Vue.component('topevents', {
	template: 
		`
			<div>
				<div class="sidebar">
					<div class="sidebartitle">Top Events</div>
					<div class="topeventslist">
						<div @click="openEvent(event)" class="topevent column is-12" v-for="event in list">
							<div class="topeventname">{{event.name}}</div>
							<div class="topeventlist-rating">
								<div>
							  		<span>{{event.likes}}</span>
							  	</div>
						  	</div>
						</div>
					</div>
				</div>
			</div>
		`,
	data: function(){
		return {
			/*list: [{id: 0, game: "Counter Strike: Global Offensive", name: "WCG", city: "Boston", likes: 666, date: "08.30.2018"}, 
			{id: 1, game: "Overwatch", name: "Overwatch world cup", city: "London", likes: 322, date: "01.25.2018"},
			{id: 2, game: "Overwatch", name: "Overwatch League", city: "London", likes: 228, date: "01.25.2018"}]
			*/
			list: []
		}
	},
	created: function(){
		this.getTopEvents();
	},
	methods: {
		openEvent: function(event){
			this.$router.push(`/event/${event.id}`)
		},
		getTopEvents: function(){
			var that = this;
			that.list = [];
			axios.get(`/api/topevents`)
                      .then(function (response){
                      	console.log(response);
                        response.data.forEach(function(item, i, arr) {
  							that.list.push({game: item.game, id: item._id, game: item.game, name: item.name, city: item.city, likes: item.rating, date: item.date})
                        });
                      })
                      .catch(function (error) {
                        that.list = [];
                        console.log(error);
                     });
		}
	}
});