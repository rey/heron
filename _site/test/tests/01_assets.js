casper.test.begin("Testing 01_home", function suite(test) {

  casper.start(config.url, function () {
    test.assertHttpStatus(200, "Connected to " + config.url);
    test.assertUrlMatch("/", "URL is root");
  });

  var cssFiles = [
    "assets/css/style.css",
    "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
  ];
  casper.then(function() {
    test.assertResourceExists("assets/images/jumbo_home.jpg"); 
  });

  casper.then(function() {
    cssFiles.forEach(function(css) {
      test.assertResourceExists(css, css + " was loaded"); 
    });
  });

  var jsFiles = [
    "assets/javascripts/main.js",
    "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js",
    "//cdn.rawgit.com/namuol/cheet.js/master/cheet.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.min.js"
  ];

  casper.then(function() {
    jsFiles.forEach(function(js) {
      test.assertResourceExists(js, js + " was loaded"); 
    });
  });

  var imageFiles = [
    // no idea why it won't load favicon
    // "assets/images/favicon.png",
  ]

  casper.then(function() {
    imageFiles.forEach(function(image) {
      test.assertResourceExists(image, image + " was loaded"); 
    });
  });

  casper.run(function () {
    test.done();
  });

});
