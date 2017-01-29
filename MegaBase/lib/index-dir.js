var fs = require('fs');
var path = require('path');
var simpleid = require('simpleid');

function Db(directory){
    this.directory = directory;
}

Db.prototype.save = function(fileName, file, callBack) {
    if (file.hasOwnProperty('_id')) return callBack({"error": "this file already exists!"});
    else {
        file._id = simpleid();
        var jsonFile = JSON.stringify(file);
        var filePath = path.join(this.directory, fileName);
        fs.writeFile(filePath, jsonFile, (err) => {
            if (err) callBack(err);
            else process.stdout.write('It\'s Saved!');
        })
    }
}

module.exports = {
    create: function(directory) {
        return new Db(directory); 
    }
}

function callback(msg) {
    console.log(msg.error);
} 

//Db.prototype.save('test2.txt', {"prop": "fuck windows", "_id": "123"}, callback);