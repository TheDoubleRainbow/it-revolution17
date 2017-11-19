addevent = Vue.component('addevent', {
	template: 
		`<div>
			<div class="columns is-centered">
				<div class="addeventblock column is-8">
					<div class="addeventheader">Add Event</div>
					<div class="addeventform">
						<div class="field">
						  <label class="label">Game</label>
						  <div class="control">
						    <div class="select">
						      <select v-model="form.game">
						        <option>Overwatch</option>
						        <option>Counter Strike Global Offensive</option>
						        <option>Dota 2</option>
						        <option>League of Legends</option>
						        <option>PUBG</option>
						      </select>
						    </div>
						  </div>
						</div>
						<div class="field">
						  <label class="label">Title</label>
						  <div class="control">
						    <input v-model="form.title" class="input" type="text" placeholder="Title of event">
						  </div>
						</div>
						<div class="field">
						  <label class="label">Location</label>
						  <div class="control">
						    <input v-model="form.city" class="input" type="text" placeholder="City">
						  </div>
						</div>
						<div class="field">
						  <label class="label">Image</label>
						  <div class="control">
						    <input v-model="form.imglink" class="input" type="text" placeholder="Image\`s link">
						  </div>
						</div>
						<div class="field">
						  <label class="label">Website</label>
						  <div class="control">
						    <input v-model="form.link" class="input" type="text" placeholder="Link to event">
						  </div>
						</div>
						<div class="field">
						  <label class="label">Description</label>
						  <div class="control">
						    <textarea v-model="form.desc"  class="textarea" placeholder="Description of event"></textarea>
						  </div>
						</div>

						<div class="field is-grouped">
						  <div class="control">
						    <button class="button is-link">Submit</button>
						  </div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`,
	data: function(){
		return {
			form: {
				game: '',
				title: '',
				city: '',
				imglink: '',
				link: '',
				desc: ``,
			}
		}
	},
	methods: {
		addevent: function(){
			if(this.form.game != '' && this.form.title != '' && this.form.city != ''){
				if(this.form.imglink == ''){
					switch(this.form.game){
						case "Overwatch":
							this.form.imglink = "https://res.cloudinary.com/teepublic/image/private/s--dzAEC90f--/t_Preview/b_rgb:484849,c_limit,f_jpg,h_630,q_90,w_630/v1488911584/production/designs/1298385_1.jpg";
							break;
						case "Counter Strike Global Offensive":
							this.form.imglink = "https://files.gamebanana.com/img/ico/sprays/530-90_4f8e1183dab55.jpg"
							break;
						case "Dota 2":
							this.form.imglink = "https://www.google.com.ua/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiqs5TUtcnXAhVsCZoKHc2hBW0QjRwIBw&url=http%3A%2F%2Fseeklogo.com%2Fvector-logo%2F262299%2Fdota-2&psig=AOvVaw2RHHmfxPjp4SLslDwMJ0AL&ust=1511139016361518"
							break;
						case "League of Legends":
							this.form.imglink = "https://i.pinimg.com/originals/30/0e/58/300e58c8416a68dcfcf1761501348243.jpg"
							break;
						case "PUBG":
							this.form.imglink = "https://gameflip.com/img/app/digital_platform_pubg.png"
							break;
					}
				}

			}
			else{
				alert("Please enter title and location")
			}
		}
	}

});