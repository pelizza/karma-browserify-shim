# karma-browserify-shim
Error using karma + browserify-shim:

To reproduce the error:

* `npm install`
* `gulp build` (everything builds fine)
* `gulp test` (doesn't work)

Here is the expected error:


> PhantomJS 2.1.1 (Mac OS X 0.0.0) ERROR
  TypeError: undefined is not an object (evaluating 'module.exports = ex')
  at /var/folders/_0/ql88mbyd6v34qsmysr5kf4780000gn/T/e0c5e5ebe3f49930de3d988c7196737f.browserify:40308 <- bower_components/jquery/dist/jquery.js:9837:0
