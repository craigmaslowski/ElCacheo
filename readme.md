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
cache.get('body').css({'background: '#cbcbcb'}); 
cache.get('#myDiv').text('Chaining works!');
```

Full example

```JavaScript
var Cache = ElCache.Cache.extend({});
var cache = new Cache();
cache.get('body').css({'background: '#cbcbcb'}); 
cache.get('#myDiv').text('Chaining works!');
```