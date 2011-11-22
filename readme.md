## ElCacheo

ElCacheo is a small JavaScript library designed to provide easy caching of jQuery/Zepto DOM lookups.

##Usage

ElCacheo borrows heavily from Backbone. Usage is similar.

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
cache.get('body').css({'background: '#cbcbcb'}); 
cache.get('#myDiv').text('Chaining works!');
```

## API

### get(selector, nocache)

Get the results of a selector. cache.get('body') works the same as $('body') except it will return the cached value if it exists.

|Param|Definition|
|-----|----------|
|selector|The css selector to lookup. (ie.'#myDiv', 'li', etc.) |
|nocache|Passing true forces ElCacheo to lookup the selector and (re)store the value in the cache|

### has(selector)

Returns true if the cache holds a value for the selector.

|Param|Definition|
|-----|----------|
|selector|The css selector to check. (ie.'#myDiv', 'li', etc.) |

### set(selectors)

Forces recaching of multiple selectors

|Param|Definition|
|-----|----------|
|selectors|Array of selectors to set in bulk|

### reset()

Resets cache to defaults, if defined, or an empty object.


