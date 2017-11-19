Eventpage = Vue.component('eventpage', {
	template: 
		`<div>
			<div>
				<div class="event column is-offset-2 is-8">
					<div class="eventheader">
						{{eventData.name}}
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
									<div v-if="eventData.link" class="eventbodylink">
										Link: <a :href="eventData.link">Page of event</a>
									</div>
									<div class="eventbodyrating">
										Rating: {{eventData.likes}} <span @click="vote" class="addrating">+</span>
									</div>
								</div>
								<div class="column is-6 hide-tablet">
									<div class="eventimgbox">
									<img class="eventbodyimg" :src="eventData.peacture" />
									</div>		
 									<div class="fbbox">		
 										 <meta property="og:title"        :content="eventData.name" />		
 										 <meta property="og:description"  :content="eventData.description" />		
 										 <meta property="og:image"        :content="eventData.imglink" />		
 								<iframe class="fbbutton" src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fitrev17.herokuapp.com%2F%23%2F&layout=button&size=small&mobile_iframe=true&width=95&height=20&appId" width="95" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
								</div>
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
                      	that.eventData = {game: response.data.event.game, description: response.data.event.description, id: response.data.event._id, game: response.data.event.game, name: response.data.event.name, city: response.data.event.city, likes: response.data.event.rating, date: response.data.event.date, peacture: response.data.event.peacture, link: response.data.event.link}
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
                      	that.getEventData()
                      	//console.log("response");
                      	//console.log(response);
                      	//that.eventData = {game: response.data.event.game, id: response.data.event._id, game: response.data.event.game, name: response.data.event.name, city: response.data.event.city, likes: response.data.event.rating, date: response.data.event.date}
                      	//that.comments = response.data.comments;
                      })
                      .catch(function (error) {
                        //that.list = [];
                        console.log(error);
                     });
		},
		vote: function(){
			axios.put(`/api/events/${this.$route.params.id}`, {vote: '+'}).then(function (response){

                      	//console.log("response");
                      	//console.log(response);
                      	//that.eventData = {game: response.data.event.game, id: response.data.event._id, game: response.data.event.game, name: response.data.event.name, city: response.data.event.city, likes: response.data.event.rating, date: response.data.event.date}
                      	//that.comments = response.data.comments;
                      })
                      .catch(function (error) {console.log(error)});
                      this.getEventData();
		}
}
});