## ElCacheo

ElCacheo is a small JavaScript library designed to provide easy caching of jQuery/Zepto DOM lookups.

##Usage

ElCacheo borrows heavily from Backbone. Usage is similar

First define your cache "class". 

```JavaScript
var Cache = ElCache.Cache.extend({});

Create an "instance" of your cache

```JavaScript
var cache = new Cache();

Then proceed to grab selections as you would with jQuery

```JavaScript
cache.get('body');

Full example

```JavaScript
var Cache = ElCache.Cache.extend({});
var cache = new Cache();
cache.get('body');