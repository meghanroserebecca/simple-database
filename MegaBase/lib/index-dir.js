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
            callBack(null, file);
        })
    }
}

module.exports = {
    create: function(directory) {
        return new Db(directory); 
    }
}

function callback(err, file) {
    if (err) return process.stdout.write(err.toString());
    process.stdout.write(JSON.stringify(file) + ' It\'s Saved!');
} 

var cuteAnimals = new Db('data');
cuteAnimals.save('sloths.txt', {"name": "sloth", "cuteness": "x1000000"}, callback);