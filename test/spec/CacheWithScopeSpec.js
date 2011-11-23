var CacheWithScope = ElCacheo.Cache.extend({
	initialize: function () {
		this.scope = '#scoped';
	}
});


var cacheWithScope = new CacheWithScope();

describe('a cache with scope', function () {
	it('should only match scoped elements', function () {
		expect(cacheWithScope.get('p')).toBeDefined();
		expect(cacheWithScope.get('p').length).toEqual(1);
	});
});