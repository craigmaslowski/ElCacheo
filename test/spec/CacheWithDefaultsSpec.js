var CacheWithDefaults = ElCacheo.Cache.extend({
	defaults: {
		'#elcacheo': $('#elcacheo')
	}
});

var cacheWithDefaults = new CacheWithDefaults();

describe('a cache with defaults', function () {
	it('should have a defaults property', function () {
		expect(cacheWithDefaults.defaults).toBeDefined();
	});
	
	it('should have a cache with an #elcacheo property', function () {
		expect(cacheWithDefaults.cache['#elcacheo']).toBeDefined();
	});
	
	it('should reset the cache to defaults when calling reset', function () {
		cacheWithDefaults.get('#elcacheo')
	});
});