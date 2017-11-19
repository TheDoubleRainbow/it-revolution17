Eventpage = Vue.component('eventpage', {
	template: 
		`
			<div>
				<div class="event column is-offset-2 is-8">
					<div class="eventheader">
						{{eventData.name.toUpperCase()}}
					</div>
					<div class="eventbody">
						<div class="shortbody">
							<div class=" columns is-centered">
								<div class="eventbodyleft column is-6">
									<div class="eventbodygame">
										Game: {{eventData.game}}
									</div>
									<div class="eventbodydate">
										Date: {{eventData.date}}
									</div>
									<div class="eventbodylocation">
										Location: {{eventData.city}}
									</div>
									<div class="eventbodylink">
										Link: <a href="#">Page of event</a>
									</div>
									<div class="eventbodyrating">
										Rating: {{eventData.likes}} <span class="addrating">+</span>
									</div>
								</div>
								<div class="column is-6 hide-tablet">
									<img class="eventbodyimg" src="https://avatars0.githubusercontent.com/u/15015118?s=460&v=4" />
								</div>
							</div>
							<div class="columns is-centered">
								<div class="eventbodydescription column is-12">
									{{eventData.description}}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="comments column is-offset-2 is-8">
					<div class="commentsheader">
						Comments:
					</div>
					<div class="commentslist">
						<div class="comment" v-for="comment in comments">
							<span class="commentuser">{{comment.user}}: </span><span class="commenttext">{{comment.body}}</span>
						</div>
					</div>
					<div class="addnewcomment">You can add new comment:</div>
					<div class="commentinput">
						<div class="columns">
					 	<input v-model="name" class="input column is-2" type="text" placeholder="Name">
					 	<input v-model="text" class="input column is-8" type="text" placeholder="Text">
					 	<button @click="sendComment"class="button is-primary">Send comment</button>
					 	</div>
					</div>
				</div>
			</div>
		`,
	data: function(){
		return {
			eventData: {id: 0, game: "Overwatch", name: "Overwatch world cup", city: "London", likes: 322, date: "01.25.2018"},
			comments: [{user: "Anon", text: "Vecher v hatu pochany mne 20 i ya borodat..."}, 
			{user: "Anon", body: "Hello world"},
			{user: "Roma", body: "Hullo i'm gay"}],
			name: "",
			text: ""
		}
	},
	created: function(){
		this.getEventData();
	},
	methods: {
		getEventData: function(){
			var that = this;
			axios.get(`/api/events/${this.$route.params.id}`)
                      .then(function (response){
                      	//console.log("response");
                      	console.log(response);
                      	that.eventData = {game: response.data.event.game, description: response.data.event.description, id: response.data.event._id, game: response.data.event.game, name: response.data.event.name, city: response.data.event.city, likes: response.data.event.rating, date: response.data.event.date}
                      	that.comments = response.data.comments;
                      })
                      .catch(function (error) {
                        //that.list = [];
                        console.log(error);
                     });
		},
		sendComment: function(){
			var that = this;
			axios.post(`/api/events/${this.$route.params.id}/comments`, {user: that.name, body: that.text})
                      .then(function (response){
                      	//console.log("response");
                      	//console.log(response);
                      	//that.eventData = {game: response.data.event.game, id: response.data.event._id, game: response.data.event.game, name: response.data.event.name, city: response.data.event.city, likes: response.data.event.rating, date: response.data.event.date}
                      	//that.comments = response.data.comments;
                      })
                      .catch(function (error) {
                        //that.list = [];
                        console.log(error);
                     });
		}
}
});