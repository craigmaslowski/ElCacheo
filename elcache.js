(function(){
	var root = this;
	
	var previousElCache = root.ElCache;
	var ElCache;
	if (typeof exports !== 'undefined') {
		ElCache = exports;
	} else {
		ElCache = root.ElCache = {};
	}
 	
	ElCache.VERSION = '0.0.1';
	
	ElCache.Cache = function(cache, options) {
		var defaults;
		if (defaults = this.defaults) {
			if (_.isFunction(defaults)) defaults = defaults.call(this);
			cache = _.extend({}, defaults, cache);
		}
		this.cache = {};
		this.set(cache);
		this.initialize(cache, options);
	};

	_.extend(ElCache.Cache.prototype, {
		initialize: function(){},
		
		get: function(el) {
			return this.cache[el];
		},

		has: function(el) {
			return this.cache[el] != null;
		},
	
		set: function(els) {
			if (!els) return this;
		
			for (var el in els) {
				var val = els[el];
				this.cache[el] = val;
			}
		},

		unset: function(el) {
			if (!(el in this.cache)) return this;
			delete this.cache[el];
			return this;
		},
	
		reset: function() {
			var defaults = this.defaults || {};
			this.cache = _.extend({}, defaults);
			return this;
		}
	});
	
	ElCache.noConflict = function() {
		root.ElCache = previousElCache;
		return this;
	};
	
	var ctor = function(){};
	
	var inherits = function(parent, protoProps, staticProps) {
		var child;

		if (protoProps && protoProps.hasOwnProperty('constructor')) {
			child = protoProps.constructor;
		} else {
			child = function(){ return parent.apply(this, arguments); };
		}

		_.extend(child, parent);

		ctor.prototype = parent.prototype;
		child.prototype = new ctor();

		if (protoProps) _.extend(child.prototype, protoProps);

		if (staticProps) _.extend(child, staticProps);

		child.prototype.constructor = child;

		child.__super__ = parent.prototype;

		return child;
	};
		
	var extend = function (protoProps, classProps) {
		var child = inherits(this, protoProps, classProps);
		child.extend = this.extend;
		return child;
	};
	
	ElCache.Cache.extend = extend;
}).call(this);