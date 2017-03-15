var fs = require('fs') ;
var path = require('path') ;

//  '/path/to/file'  ,  'txt'

fs.readdir(process.argv[2], myCallbackDir);

var extstr = '.'+process.argv[3];

//where list is an array of filename strings.
function myCallbackDir (err, bufferList) {
    if (err) return console.error(err);

    /*
    path.extname('index.html')
      // returns
        '.html'
    */

    bufferList.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })

    /*
    var filtered = bufferList.filter(function filterExt (file) {
      if (path.extname(file) == extstr) {
        console.log(file)
      }
      return path.extname(file) == extstr ;
    });
    */

}
