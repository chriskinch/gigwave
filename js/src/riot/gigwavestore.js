// TodoStore definition.
// Flux stores house application logic and state that relate to a specific domain.
// In this case, a list of todo items.
function GigwaveStore() {
  riot.observable(this) // Riot provides our event emitter.
  
  var self = this
  console.log(this);

  self.api_url = "http://ws.audioscrobbler.com/2.0/?";
  self.api_params = {
    method: "chart.getTopArtists",
    api_key: "31ef949b49acf31f34714d3380e8423c",
    format: "json"
  }

  // Our store's event handlers / API.
  // This is where we would use AJAX calls to interface with the server.
  // Any number of views can emit actions/events without knowing the specifics of the back-end.
  // This store can easily be swapped for another, while the view components remain untouched.
  self.on('gigwave_init', function() {
    self.loadJSON(self.api_url, self.api_params);
  })

  self.on('todo_init', function() {
    self.trigger('todos_changed', self.todos)
  })

  self.loadJSON = function(url, params) {
    var self = this;

    var evt = new CustomEvent('lastfmfeeds:getjson');
    window.dispatchEvent(evt);

    // GET the JSON feed using XMLHttpRequest
    try {
      var xhr = new XMLHttpRequest();
      var prm = objToParams(params); // Convert our param object into a string
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          var data = JSON.parse(xhr.response); // The response comes as a string so we convert it to JSON
          self.artists = data;
          console.log(data.artists);
          self.trigger('gigwave_changed', data.artists.artist)
        }
      };
      xhr.open("GET", url + prm, true); // Async is true
      xhr.send(null);
    } catch (e) {
      console.log( 'Error loading JSON' );
      console.log(e);
    }
  }

  // The store emits change events to any listening views, so that they may react and redraw themselves.

}
