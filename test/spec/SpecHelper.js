beforeEach(function() {
  this.addMatchers({
    toBeCached: function(selector) {
      var cache = this.actual;
      return cache.cache[selector] != null;
    },

    toNotBeCached: function(selector) {
      var cache = this.actual;
      return cache.cache[selector] == null;
    },

		toBeAFunction: function() {
			return _.isFunction(this.actual);			
		},
		
		toNotBeAFunction: function() {
			return !_.isFunction(this.actual);			
		}
  });
});