var http = require('http');
/*
Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each
  "data" event from the response to a new line on the console (stdout).
*/

///////////////

/***
Where the response object is a Node Stream object. You can treat Node
  Streams as objects that emit events. The three events that are of most
  interest are: "data", "error" and "end". You listen to an event like so:

     response.on("data", function (data) { /* ... *

  The "data" event is emitted when a chunk of data is available and can be
  processed. The size of the chunk depends upon the underlying data source.

  The response object / Stream that you get from http.get() also has a
  setEncoding() method. If you call this method with "utf8", the "data"
  events will emit Strings rather than the standard Node Buffer objects
  which you have to explicitly convert to Strings.
****/
http.get(process.argv[2], function(res) {
  //console.log("Got response: " + res.statusCode);

  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log(chunk);
  });

  /*
  res.on('error', console.error);
  res.on('end', function (chunk) {
    console.log('end');
  });
  */
}).on('error', console.error);
