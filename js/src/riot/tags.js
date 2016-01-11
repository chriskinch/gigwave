(function(root, factory) {
	if (typeof(define) === 'function' && define.amd) {
		define(['riot', 'riotcontrol'], function(riot, RiotControl) {
			factory(riot, RiotControl);
		});
	}
	else if (typeof(module) !== 'undefined' && typeof module.exports !== 'undefined') {
		var riot = require('riot');
		var RiotControl = require('riotcontrol');

		factory(riot, RiotControl);
	}
	else {
		factory(root.riot, root.RiotControl);
	}
})(this, function(riot, RiotControl) {
	
	riot.tag('bandsearch', '<h1>Search for a band!</h1><form onsubmit="{add}"><input name="input" onkeyup="{edit}"><button __disabled="{!text}">Search</button></form> ', function(opts) {
	    this.items = opts.items
	
	  RiotControl.on('todos_changed', function(items) {
	    self.items = items
	    self.update()
	  }) 
	
	    this.edit = function(e) {
	      this.text = e.target.value
	    }.bind(this);
	
	    this.add = function(e) {
	      if (this.text) {
	        this.items.push({ title: this.text })
	        this.text = this.input.value = ''
	      }
	    }.bind(this);
	  
	});
	
	

});