eventpage = Vue.component('eventpage', {
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
								<div class="column is-6">
									<div class="eventbodygame">
										Game: {{eventData.game}}
									</div>
									<div class="eventbodylocation">
										Location: {{eventData.city}}
									</div>
									<div class="eventbodylink">
										Link: <a href="#">View event\`s page</a>
									</div>
									<div class="eventbodyrating">
									</div>
								</div>
								<div class="column is-6">
									<img src="kl" />
								</div>
							</div>
							<div class="columns is-centered">
								<div class="eventbodydescription column is-12">

								</div>
							</div>
						</div>
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