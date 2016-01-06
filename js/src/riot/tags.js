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
	
	riot.tag('bandsearch', '<h1>Search for a band!</h1><form onsubmit="{add}"><input name="input" onkeyup="{edit}"><button __disabled="{!text}">Search</button></form> ', function(opts) {
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