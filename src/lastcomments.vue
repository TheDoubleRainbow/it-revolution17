lastcomments = Vue.component('lastcomments', {
	template: 
		`
			<div>
				<div class="sidebar">
					<div class="sidebartitle">Last Comments</div>
					<div class="topeventslist">
						<div @click="openEvent(event)" class="topevent column is-12" v-for="event in list">
							<div class="topeventname"><img class="lastcommentsimg" src="https://res.cloudinary.com/teepublic/image/private/s--dzAEC90f--/t_Preview/b_rgb:484849,c_limit,f_jpg,h_630,q_90,w_630/v1488911584/production/designs/1298385_1.jpg" />{{event.name}}</div>
						</div>
					</div>
				</div>
			</div>
		`,
	data: function(){
		return {
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
  							that.list.push({game: item.game, id: item._id, game: item.game, name: item.name, city: item.city, likes: item.rating, date: item.date, peacture: item.peacture, link: item.link})
                        });
                      })
                      .catch(function (error) {
                        that.list = [];
                        console.log(error);
                     });
		}
	}
});