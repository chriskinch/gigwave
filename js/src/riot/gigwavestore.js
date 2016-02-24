// TodoStore definition.
// Flux stores house application logic and state that relate to a specific domain.
// In this case, a list of todo items.
function GigwaveStore() {
	riot.observable(this); // Riot provides our event emitter.
	
	var self = this;

	self.api_url = "http://ws.audioscrobbler.com/2.0/?";
	self.api_key = "31ef949b49acf31f34714d3380e8423c";
	//http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&api_key=31ef949b49acf31f34714d3380e8423c&format=json
	self.bands = {
		params: {
			method: "chart.getTopArtists",
			api_key: self.api_key,
			format: "json",
			limit: 999
		},
		callback: "processBands"
	};
	//http://ws.audioscrobbler.com/2.0/?method=geo.getTopArtists&api_key=31ef949b49acf31f34714d3380e8423c&format=json
	self.locations = {
		params: {
			method: "geo.getTopArtists",
			country: 31,
			api_key: self.api_key,
			format: "json"
		},
		callback: "processLocations"
	};

	self.events = {
		params: {
			method: "events.getEvents",
			format: "json"
		},
		callback: "processEvents"
	};

	// Local data for testing! REMOVE FOR PRODUCTION!
	// self.api_url = "http://localhost:8000/dummydata.json?";

	self.on('gigwave_selected', function(items) {
		helpers.each(items, function(key, val) {
			if(val.selected === true){
				self.selected = val;
				console.log(val);
				console.log(val.index);
			}
		});
	});

	self.loadJSON = function(url, params, callback) {
		var self = this;

		var evt = new CustomEvent('lastfmfeeds:getjson');
		window.dispatchEvent(evt);

		// GET the JSON feed using XMLHttpRequest
		try {
			var xhr = new XMLHttpRequest();
			var prm = helpers.objToParams(params); // Convert our param object into a string
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					console.log(xhr.response);
					var data = JSON.parse(xhr.response); // The response comes as a string so we convert it to JSON
					self[callback](data);
				}
			};
			xhr.open("GET", url + prm, true); // Async is true
			xhr.send(null);
		} catch (e) {
			console.log( 'An error loading JSON' );
			console.log(e);
		}
	};

	self.processBands = function(data) {
		self.bands.data = self.formatData(data.artists.artist, "name");
		self.bands.data = self.addIndex(data.artists.artist, "text");

		// Save data to DB for date here

		self.trigger('gigwave_loaded_bands', self.bands.data);
	};

	self.processLocations = function(data) {
		self.locations.data = self.formatData(data, "Name");
		self.trigger('gigwave_loaded_locations', self.locations.data);
	};

	self.processEvents = function(data) {
		self.events.data = self.formatData(data.events.event, "venue");
		self.trigger('gigwave_loaded_events', self.events.data);
		console.log(data);
	};

	self.formatData = function(data, map) {    
		helpers.each(data, function(key, val){
			val.text = val[map]; // Adding "text" for Riot Gear component "autocomplete"
		});

		return data;
	};

	self.addIndex = function(data, target) {   
		helpers.each(data, function(key, val){ 
			var num = Number(key) + 1;
			val[target] = num + ". " + val[target]; // Adding "text" for Riot Gear component "autocomplete"
		});

		return data;
	};

	self.loadJSON("countrycodes.json?", self.locations.params, self.locations.callback);
	self.loadJSON("dummyevents.json?", self.events.params, self.events.callback);
	self.loadJSON(self.api_url, self.bands.params, self.bands.callback);
	// The store emits change events to any listening views, so that they may react and redraw themselves.

}