Eventpage = Vue.component('eventpage', {
	template: 
		`
			<div class="columns is-centered">
				<div class="event column is-8">
					<div class="eventheader">
						Event\`s name
					</div>
					<div class="eventbody">
						<div class="shortbody">
							<div class=" columns is-centered">
								<div class="eventbodyleft column is-6">
									<div class="eventbodygame">
										Game: {{eventData.game}}
									</div>
									<div class="eventbodylocation">
										Location: {{eventData.city}}
									</div>
									<div class="eventbodylink">
										Link: <a href="#">Page of event</a>
									</div>
									<div class="eventbodyrating">
									</div>
								</div>
								<div class="column is-6 hide-tablet">
									<img class="eventbodyimg" src="https://avatars0.githubusercontent.com/u/15015118?s=460&v=4" />
								</div>
							</div>
							<div class="columns is-centered">
								<div class="eventbodydescription column is-12">
									Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dui purus, mollis vitae neque in, scelerisque fermentum tortor. Nulla in ex sed felis luctus tempor. Curabitur feugiat molestie cursus. Vestibulum pretium dignissim dignissim. Morbi nec tempor magna. Aliquam aliquet massa quis odio ullamcorper ornare. Aenean ultrices arcu et condimentum rhoncus. Mauris leo urna, auctor et facilisis sed, interdum et lectus. Pellentesque auctor velit at ex viverra, pharetra faucibus purus molestie.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="comments">
					<div class="commentsheader">
					</div>
				</div>
			</div>
		`,
	data: function(){
		return {
			eventData: {id: 0, game: "Overwatch", name: "Overwatch world cup", city: "London", likes: 322, date: "01.25.2018"}
		}
	}
});