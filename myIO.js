var fs = require('fs') ;

//var myBufferFile = fs.readFileSync('/path/to/file') ;

var myBufferFile = fs.readFileSync(process.argv[2])
/**
note you can avoid the .toString() by passing 'utf8' as the
second argument to readFileSync, then you'll get a String!

fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

*/
var strBF = myBufferFile.toString() ;
var arrBF = strBF.split('\n');
// print lines of file , split by '\n'
console.log(arrBF.length-1)
