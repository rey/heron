casper.test.begin("Testing 01_assets", function suite(test) {

  casper.start(config.url, function () {
    test.assertHttpStatus(200, "Connected to " + config.url);
    test.assertUrlMatch("/", "URL is root");
  });

  casper.then(function() {
    var cssFiles = this.getElementsAttribute('link[type="text/css"]', 'href');
    cssFiles.forEach(function(css) {
      test.assertResourceExists(css, css + " was loaded"); 
    });
  });

  casper.then(function() {
    var jsFiles = this.getElementsAttribute('script', 'src');
    jsFiles.forEach(function(js) {
      test.assertResourceExists(js, js + " was loaded"); 
    });
  });

  casper.run(function () {
    test.done();
  });

});
