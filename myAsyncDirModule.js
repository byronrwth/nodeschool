var fs = require('fs') ;
var path = require('path') ;

module.exports = function ( dir, ext, myCallBack) {

  //  '/path/to/file'  ,  'txt'

  //where list is an array of filename strings.
  function myCallbackDir (err, bufferList) {
      if (err) return myCallBack(err);

      let out = []
      /*
      path.extname('index.html')
        // returns
          '.html'
      */
      var extstr = '.'+ext;

      bufferList.forEach(function (file) {
          if (path.extname(file) === extstr) {
            //console.log(file)
            out.push(file);
          }

        })

      myCallBack(null, out);

      /*
      var filtered = bufferList.filter(function filterExt (file) {
        if (path.extname(file) == extstr) {
          console.log(file)
        }
        return path.extname(file) == extstr ;
      });
      */

  }

  fs.readdir(dir, myCallbackDir);




}
