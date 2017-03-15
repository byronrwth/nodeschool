var myAsyncDirModule = require('./myAsyncDirModule.js')

myAsyncDirModule(process.argv[2], process.argv[3], function myCallBack2(err, files) {
  if (err) {
    console.log("error");
  }
  else {
    console.log(files.join('\n'));
    //console.log(files);
    //output should not be a list, but each name per line:  "[ 'CHANGELOG.md', 'LICENCE.md', 'README.md' ]"
  }

})
