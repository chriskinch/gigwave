/*
 * Controls the setup and JSON loading of each feed.
	* @param {Function} feedLoader
* @param {Function} feedLoader.init (Required)
*
* @param {String} selector: ID or class that will contain the feed
*/



function LoadJSONP(  ) {}

LoadJSONP.prototype = {

	request: function(url, params){
		// GET the JSON feed using XMLHttpRequest
		try {
			var xhr = new XMLHttpRequest();
			var prm = objToParams(params); // Convert our param object into a string
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					return data;
				}
			};
			xhr.open("GET", url + prm, true); // Async is true
			xhr.send(null);
		} catch (e) {
			console.log( 'Error loading JSON feed.' );
			console.log(e);
		}
	}

};