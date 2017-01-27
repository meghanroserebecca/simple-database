var fs = require('fs');
var path = require('path');
var simpleid = require('simpleid');
var obj = require('../data/test2.txt');
const userDir = '..\\data\\';

function Db(directory){
    this.directory = directory;
}

Db.prototype.save = function(fileName, file, callBack) {
    if (file.hasOwnProperty('_id')) callBack({"error": "this file already exists!"});
    file._id = simpleid();
    var jsonFile = JSON.stringify(file);
    var filePath = userDir + fileName;
    fs.writeFile(filePath, jsonFile, (err) => {
       if (err) callBack(err);
       else
        process.stdout.write('It\s Saved!');
   })
}

// module.exports = {
//     create: function(directory) {
//         return new Db(directory); 
//     }
// }
function callback(msg) {
    console.log(msg);
} 

Db.prototype.save('test2.txt', {"property": "fuck windows"}, callback);