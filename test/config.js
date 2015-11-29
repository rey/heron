casper.options.verbose = true;
casper.options.logLevel = "debug";
casper.options.viewportSize = {width: 1600, height: 980};

var config = {
  url: "http://localhost:5000",
  outputFolder: "output/"
}

casper.test.on('fail', function() {
  casper.capture(config.outputFolder  + 'fail_' + Math.random().toString(36).substr(2, 6) + '.png' );
});
