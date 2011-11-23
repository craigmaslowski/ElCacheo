## ElCacheo

ElCacheo is a small JavaScript library designed to provide easy caching of jQuery/Zepto DOM lookups.

##Requirements

The inspiration for ElCacheo came from a need to cache elements in Backbone views. As such, it borrows heavily from Backbone's design patterns and requires the underscore library.

Since ElCacheo's purpose is to cache jQuery/Zepto lookups, either one of those libraries is required as well.

##Usage

Usage is very similar to creating objects with Backbone.

First define your cache "class". 

```JavaScript
var Cache = ElCache.Cache.extend({});
```

Create an "instance" of your cache

```JavaScript
var cache = new Cache();
```

Then pass your selector to the get() method. ElCacheo will make the selection, using jQuery or Zepto, or return the cached copy if the selection was previously made.

```JavaScript
cache.get('body'); // instead of $('body')
cache.get('#myDiv'); // instead of $('#myDiv')
```

The get() method returns the jQuery/Zepto object, so you can chain as normal.

```JavaScript
cache.get('body').css({'background': '#cbcbcb'}); 
cache.get('#myDiv').text('Chaining works!');
```

Full example

```JavaScript
var Cache = ElCache.Cache.extend({});
var cache = new Cache();
cache.get('body').css({'background': '#cbcbcb'}); 
cache.get('#myDiv').text('Chaining works!');
```

## API

### get(selector, nocache)

Get the results of a selector. cache.get('body') works the same as $('body') except it will return the cached value if it exists. If the value is not in the cache, get will cache the selection and return the results.

```JavaScript
var Cache = ElCache.Cache.extend({});
var cache = new Cache();

cache.get('body'); // returns the cached value or adds the selection to the cache if it's not cached yet
```

Passing true to the nocache parameter will cause get to recache the selection and return the results

```JavaScript
var Cache = ElCache.Cache.extend({});
var cache = new Cache();

cache.get('body', true); // recaches the selection and returns the results
```

### has(selector)

Returns true if the cache holds a value for the selector passed in.

```JavaScript
var Cache = ElCache.Cache.extend({});
var cache = new Cache();

cache.get('body');
cache.has('body'); // returns true
cache.has('#myDiv'); // returns false
```

### set(selectors)

Adds multiple selections to the cache with a single function call

```JavaScript
var Cache = ElCache.Cache.extend({});
var cache = new Cache();

cache.set(['body'], ['#myDiv']); // adds all selectors in the array into the cache
cache.has('body'); // returns true
cache.has('#myDiv''); // returns true
```

### unset(selector)

Removes a selection from the cache

```JavaScript
var Cache = ElCache.Cache.extend({});
var cache = new Cache();

cache.set(['body'], ['#myDiv']); // adds all selectors in the array into the cache
cache.has('body'); // returns true
cache.has('#myDiv''); // returns true

cache.unset('body');
cache.has('body'); // returns false
cache.has('#myDiv''); // returns true
```

### reset()

Resets cache to defaults, if defined, or an empty object.

```JavaScript
var Cache = ElCache.Cache.extend({});
var cache = new Cache();

cache.get('body');
cache.has('body'); // returns true

cache.reset();
cache.has('body'); // returns false
```

```JavaScript
var Cache = ElCache.Cache.extend({
	defaults: {
		'body': $('body');
	}
});
var cache = new Cache();

cache.has('body'); // returns true

cache.get('#myDiv');
cache.has('#myDiv'); // returns true

cache.reset();
cache.has('body'); // returns true
cache.has('#myDiv'); // returns false
```