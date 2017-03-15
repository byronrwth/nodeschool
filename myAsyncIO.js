var fs = require('fs') ;

//var myBufferFile = fs.readFileSync('/path/to/file') ;

fs.readFile(process.argv[2], myCallbackReading);

function myCallbackReading (err, bufferData) {
    if (err) return console.error(err);

    var strBF = bufferData.toString() ;
    var arrBF = strBF.split('\n');
    // print lines of file , split by '\n'
    console.log(arrBF.length-1)
}
