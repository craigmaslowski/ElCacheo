beforeEach(function() {
  this.addMatchers({
		toBeAFunction: function() {
			return _.isFunction(this.actual);			
		},
		
		toNotBeAFunction: function() {
			return !_.isFunction(this.actual);			
		}
  });
});