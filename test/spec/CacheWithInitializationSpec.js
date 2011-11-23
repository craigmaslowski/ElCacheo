var CacheWithInitialization = ElCacheo.Cache.extend({
	initialize: function (cache, options) {
		this.passedInCache = cache;
		this.passedInOptions = options;
	}
});

var initialCache = {
	'body': $('body')
};

var initialOptions = {
	someOption: "someOption's value"
};

var cacheWithInitialization = new CacheWithInitialization(initialCache, initialOptions);

describe('a cache with initialization', function () {
	it('should have a passedInCache property', function () {
		expect(cacheWithInitialization.passedInCache).toBeDefined();
	});

	it('should have a passedInCache property equal to initialCache', function () {
		expect(cacheWithInitialization.passedInCache).toEqual(initialCache);
	});
	
	it('should have a passedInOptions property', function () {
		expect(cacheWithInitialization.passedInOptions).toBeDefined();
	});

	it('should have a passedInOptions property equal to initialOptions', function () {
		expect(cacheWithInitialization.passedInOptions).toEqual(initialOptions);
	});
});