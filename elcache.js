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
	
	var $ = root.jQuery || root.Zepto;
	
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
		
		get: function(selector, nocache) {
			if (!this.cache[selector] || nocache) this.cache[selector] = $(selector);
			return this.cache[selector];
		},

		has: function(selector) {
			return this.cache[selector] != null;
		},
	
		// explicitly set selector overriding the cache
		set: function(selectors) {
			if (!selector) return this;
		
			for (var selector in selectors) {
				this.cache[selector] = $(selector);
			}
		},

		unset: function(selector) {
			if (!(selector in this.cache)) return this;
			delete this.cache[selector];
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