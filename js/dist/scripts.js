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
String.prototype.cleanup = function() {
	return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
};

Array.prototype.clean = function(del) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] === del) {
			this.splice(i, 1);
			i--;
		}
	}
	return this;
};

function setClassesArray(item, key, limit) {
	var first = (key === 0) ? 'first' : '';
	var last = (key === limit-1) ? 'last' : '';
	var classes_array = [item, first, last];
	var classes = classes_array.clean('').join(' ').trim();

	return classes;
}

function timeAgo(date){
	var m = 60;
	var h = m * 60;
	var d = new Date();
	var n = d.getTime();
	var now = String(n).substr(0,date.uts.length);
	var elapsed = now - date.uts;
	var elapsed_string = (elapsed/m < 60) ? Math.round(elapsed/m) + ' minute' : (elapsed/h < 24) ? Math.round(elapsed/h) + ' hour' : null;
	var plural = (elapsed > 1) ? 's' : '';

	var when = (elapsed_string) ? elapsed_string + plural + ' ago' : date['#text'];
	return when;
}

/**
* Helper function for iterating over a collection
*
* @param list
* @param fn
*/
function each(list, fn) {
	for (var key in list) {
		if( list.hasOwnProperty(key) ) {
			cont = fn(key, list[key]);
			if(cont === false) {
				break; //allow early exit
			}
		}
	}
}

/**
* Helper function for turning object into a string of params
*
* @param obj
*/
function objToParams(obj) {
	var str = "";
	for (var key in obj) {
		if (str !== "") {
			str += "&";
		}
		str += key + "=" + obj[key];
	}
	return str;
}

/**
 * CustomEvent polyfill
 */
if (typeof window.CustomEvent !== 'function') {
  (function() {
    function CustomEvent(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
     }

    window.CustomEvent = CustomEvent;

    CustomEvent.prototype = window.CustomEvent.prototype;
  })();
}/*
 * Controls the setup and JSON loading of each feed.
	* @param {Function} feedLoader
* @param {Function} feedLoader.init (Required)
*
* @param {String} selector: ID or class that will contain the feed
*/



function loader( element, settings ) {
	this.element = element;
	this.settings = settings;
	this.status = null;
}

loader.prototype = {

	loadfeed: function( url, params ){
		var self = this;
		var data;

		// GET the JSON feed using XMLHttpRequest
		try {
			var xhr = new XMLHttpRequest();
			var prm = objToParams(params); // Convert our param object into a string
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					data = JSON.parse(xhr.response); // The response comes as a string so we convert it to JSON
					console.log(data);
					return data;
				}
			};
			xhr.open("GET", url + prm, true); // Async is true
			xhr.send(null);
		} catch (e) {
			console.log( 'Gigwave: Error loading feed.' );
			console.log(e);
		}
	}

};
(function(root, factory) {
	if (typeof(define) === 'function' && define.amd) {
		define(['riot'], function(riot) {
			factory(riot);
		});
	}
	else if (typeof(module) !== 'undefined' && typeof module.exports !== 'undefined') {
		var riot = require('riot');

		factory(riot);
	}
	else {
		factory(root.riot);
	}
})(this, function(riot) {
	
	riot.tag('todo', '<h1>{opts.title}</h1><ul><li each="{items.filter(whatShow)}"><label class="{completed: done}"><input type="checkbox" __checked="{done}" onclick="{parent.toggle}"> {title} </label></li></ul><form onsubmit="{add}"><input name="input" onkeyup="{edit}"><button __disabled="{!text}">Add #{items.filter(whatShow).length + 1}</button><button __disabled="{items.filter(onlyDone).length == 0}" onclick="{removeAllDone}"> X{items.filter(onlyDone).length} </button></form> ', function(opts) {
	    this.items = opts.items
	
	    this.edit = function(e) {
	      this.text = e.target.value
	    }.bind(this);
	
	    this.add = function(e) {
	      if (this.text) {
	        this.items.push({ title: this.text })
	        this.text = this.input.value = ''
	      }
	    }.bind(this);
	
	    this.removeAllDone = function(e) {
	      this.items = this.items.filter(function(item) {
	        return !item.done
	      })
	    }.bind(this);
	
	    this.whatShow = function(item) {
	      return !item.hidden
	    }.bind(this);
	
	    this.onlyDone = function(item) {
	     return item.done
	   }
	
	    this.toggle = function(e) {
	      var item = e.item
	      item.done = !item.done
	      return true
	    }.bind(this);
	  
	});
	
	

});