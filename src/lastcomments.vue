lastcomments = Vue.component('lastcomments', {
	template: 
		`
			<div>
				<div class="sidebar">
					<div class="sidebartitle">Last Comments</div>
					<div class="topeventslist">
						<div @click="openEvent($event, comment.event_id._id)" class="topevent column is-12" v-for="comment in list">
							<div class="topeventname"><img class="lastcommentsimg" :src="comment.event_id.peacture" />{{comment.body}}</div>
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
		openEvent: function(event, id){
			this.$router.push(`/event/${id}`)
		},
		getTopEvents: function(){
			var that = this;
			that.list = [];
			axios.get(`/api/lastcomments`)
                      .then(function (response){
                      	console.log(response);
                        //response.data.forEach(function(item, i, arr) {
  							//that.list.push({game: item.game, id: item._id, game: item.game, name: item.name, city: item.city, likes: item.rating, date: item.date, peacture: item.peacture, link: item.link})
  							//that.list.push()
                        //});
                        that.list = response.data;
                      })
                      .catch(function (error) {
                        that.list = [];
                        console.log(error);
                     });
		}
	}
});