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

var helpers = {};

helpers.setClassesArray = function(item, key, limit) {
	var first = (key === 0) ? 'first' : '';
	var last = (key === limit-1) ? 'last' : '';
	var classes_array = [item, first, last];
	var classes = classes_array.clean('').join(' ').trim();

	return classes;
};

helpers.timeAgo = function(date){
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
};

/**
* Helper function for iterating over a collection
*
* @param list
* @param fn
*/
helpers.each = function(list, fn) {
	for (var key in list) {
		if( list.hasOwnProperty(key) ) {
			cont = fn(key, list[key]);
			if(cont === false) {
				break; //allow early exit
			}
		}
	}
};

/**
* Helper function for turning object into a string of params
*
* @param obj
*/
helpers.objToParams = function(obj) {
	var str = "";
	for (var key in obj) {
		if (str !== "") {
			str += "&";
		}
		str += key + "=" + obj[key];
	}
	return str;
};

helpers.objectRef = function(obj, str) {
  str = str.split(".");
  for (var i = 0; i < str.length; i++)
      obj = obj[str[i]];
  return obj;
};