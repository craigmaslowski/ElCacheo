var ACache = ElCacheo.Cache.extend({});
var aCache = new ACache();

describe('a cache', function () {
	beforeEach(function () {
		aCache.reset();
	});
	
	it('should have a cache property', function () {
		expect(aCache.cache).toBeDefined();		
	});

	it('should not have a defaults property', function () {
		expect(aCache.defaults).toBeUndefined();
	});
	
	it('should have a get function', function () {
		expect(aCache.get).toBeAFunction();
	});
	
	it('should have a has function', function () {
		expect(aCache.has).toBeAFunction();		
	});
	
	it('should have a set function', function () {
		expect(aCache.set).toBeAFunction();		
	});
	
	it('should have an unset function', function () {
		expect(aCache.unset).toBeAFunction();		
	});
	
	it('should have a reset function', function () {
		expect(aCache.reset).toBeAFunction();		
	});
	
	it('should cache the #elcacheo property when calling get', function () {
		expect(aCache.cache['#elcacheo']).toBeUndefined();
		expect(aCache.get('#elcacheo')).toEqual(aCache.cache['#elcacheo']);
	});
	
	it('should return true when calling has after caching a selection', function () {
		expect(aCache.cache['#elcacheo']).toBeUndefined();
		expect(aCache.get('#elcacheo')).toEqual(aCache.cache['#elcacheo']);
		expect(aCache.has('#elcacheo')).toEqual(true);
	});
	
	it('should return false when calling has with no element cached', function () {
		expect(aCache.cache['#elcacheo']).toBeUndefined();
		expect(aCache.has('#elcacheo')).toEqual(false);
	});
	
	it('should add selections in bulk when calling set', function() { 
		expect(aCache.cache['#elcacheo']).toBeUndefined();
		expect(aCache.cache['body']).toBeUndefined();
		expect(aCache.cache['head']).toBeUndefined();
		aCache.set(['#elcacheo', 'body', 'head']);
		expect(aCache.cache['#elcacheo']).toBeDefined();
		expect(aCache.cache['body']).toBeDefined();
		expect(aCache.cache['head']).toBeDefined();
	});
	
	it('should have a cache with an #elcacheo property that is a jquery/zepto object', function () {
		expect(aCache.cache['#elcacheo']).toBeUndefined();
		expect(aCache.get('#elcacheo')).toEqual(aCache.cache['#elcacheo']);
		// TODO: there's probably a better way to test this. figure it out.
		expect(aCache.cache['#elcacheo'].addClass).toBeAFunction();
		expect(aCache.cache['#elcacheo'].removeClass).toBeAFunction();
	});
	
	it('should not have a cached value for #elcacheo after calling unset', function () {	
		expect(aCache.cache['#elcacheo']).toBeUndefined();
		expect(aCache.get('#elcacheo')).toEqual(aCache.cache['#elcacheo']);
		expect(aCache.cache['#elcacheo']).toBeDefined();
		aCache.unset('#elcacheo');
		expect(aCache.cache['#elcacheo']).toBeUndefined();
	});
	
	it('should have an empty cache after calling reset', function () {
		expect(aCache.cache['#elcacheo']).toBeUndefined();
		expect(aCache.get('#elcacheo')).toEqual(aCache.cache['#elcacheo']);
		expect(aCache.cache['#elcacheo']).toBeDefined();
		aCache.reset();
		expect($.isEmptyObject(aCache.cache)).toEqual(true);
	});
});