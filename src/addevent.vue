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
						      <select>
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
						    <input class="input" type="text" placeholder="Title of event">
						  </div>
						</div>
						<div class="field">
						  <label class="label">Location</label>
						  <div class="control">
						    <input class="input" type="text" placeholder="City">
						  </div>
						</div>
						<div class="field">
						  <label class="label">Image</label>
						  <div class="control">
						    <input class="input" type="text" placeholder="Image\`s link">
						  </div>
						</div>
						<div class="field">
						  <label class="label">Website</label>
						  <div class="control">
						    <input class="input" type="text" placeholder="Link to event">
						  </div>
						</div>
						<div class="field">
						  <label class="label">Description</label>
						  <div class="control">
						    <textarea class="textarea" placeholder="Description of event"></textarea>
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
			
		}
	}

});