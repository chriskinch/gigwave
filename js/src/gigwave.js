/*
 * Controls the setup and JSON loading of each feed.
	* @param {Function} feedLoader
* @param {Function} feedLoader.init (Required)
*
* @param {String} selector: ID or class that will contain the feed
* @param {String} user: The user name to fetch top albums for.
* @param {String} api_key: Your Last.fm API key.
* @param {String} method: The type of API to call to be made. (e.g: user.gettopalbums|user.getrecenttracks)
*
* @param {Object} options: Options object (Optional) 
* @param {Number} options.limit: The number of results to fetch per page. Defaults to 10.
* @param {Number} options.size: The size of the albumb art to return.
* @param {String} options.period: The time period over which to retrieve top albums for (e.g: overall|7day|1month|3month|6month|12month)
* @param {Boolean} options.cover: Toggles the rendering of the cover image
* @param {Boolean} options.album: Toggles the rendering of the album name
* @param {Boolean} options.artist: Toggles the rendering of the artist name
* @param {Boolean} options.plays: Toggles the rendering of the play count
* @param {Boolean} options.date: Toggles the rendering of the date played
* @param {Boolean} options.playing: Toggles the rendering of the current playing track (note: user.getrecenttracks only)
*/

function gigwave() {}

gigwave.prototype = {

	init: function( data ){
		console.log("hello");
	},

};
