// TodoStore definition.
// Flux stores house application logic and state that relate to a specific domain.
// In this case, a list of todo items.
function GigwaveStore() {
  riot.observable(this) // Riot provides our event emitter.
  
  var self = this
  self.data = {};

  self.api_url = "http://ws.audioscrobbler.com/2.0/?";
  self.api_key = "31ef949b49acf31f34714d3380e8423c";
  //http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&api_key=31ef949b49acf31f34714d3380e8423c&format=json
  self.band_params = {
    method: "chart.getTopArtists",
    api_key: self.api_key,
    format: "json",
    limit: 999
  }
  //http://ws.audioscrobbler.com/2.0/?method=geo.getTopArtists&api_key=31ef949b49acf31f34714d3380e8423c&format=json
  self.location_params = {
    method: "geo.getTopArtists",
    country: 31,
    api_key: self.api_key,
    format: "json"
  }

  // Local data for testing! REMOVE FOR PRODUCTION!
  self.api_url = "http://localhost:8000/dummydata.json?";

  // Our store's event handlers / API.
  // This is where we would use AJAX calls to interface with the server.
  // Any number of views can emit actions/events without knowing the specifics of the back-end.
  // This store can easily be swapped for another, while the view components remain untouched.
  self.on('gigwave_init', function() {
    self.loadJSON(self.api_url, self.band_params, "band", "artists.artist", "name");
    self.loadJSON("countrycodes.json?", {}, "location", null, "Name");
  })

  self.on('gigwave_selected', function(items) {
    helpers.each(items, function(key, val) {
      if(val.selected === true){
        self.selected = val;
        console.log(val);
      }
    });
    //self.trigger('todos_changed', self.todos)
  })

  self.loadJSON = function(url, params, store, target, text_map) {
    var self = this;

    var evt = new CustomEvent('lastfmfeeds:getjson');
    window.dispatchEvent(evt);

    // GET the JSON feed using XMLHttpRequest
    try {
      var xhr = new XMLHttpRequest();
      var prm = helpers.objToParams(params); // Convert our param object into a string
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          var data = JSON.parse(xhr.response); // The response comes as a string so we convert it to JSON
          //console.log(data);
          var data_ref = (target) ? helpers.objectRef(data, target) : data; 
          self.data[store] = self.formatData(data_ref, text_map);
          self.trigger('gigwave_loaded', self.data);
        }
      };
      xhr.open("GET", url + prm, true); // Async is true
      xhr.send(null);
    } catch (e) {
      console.log( 'An error loading JSON' );
      console.log(e);
    }
  }

  self.formatData = function(data, map) {
    helpers.each(data, function(key, val){
      val.text = val[map]; // Adding "text" for Riot Gear component "autocomplete"
    });

    return data
  }

  // The store emits change events to any listening views, so that they may react and redraw themselves.

}
