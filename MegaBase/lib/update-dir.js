var fs = require('fs');
var path = require('path');
var simpleid = require('simpleid');

function Db(directory){
    this.directory = directory;
}

Db.prototype.update = function(fileName, file, callBack) {
    if (!file.hasOwnProperty('_id')) return callBack({"error": "this file does not exist!"});
    else {var filePath = path.join(this.directory, fileName);
        fs.readFile(filePath, (err, data) => {
        if(err) return callBack(err);
        var filePath = path.join(this.directory, fileName);
        var dataToAdd = JSON.stringify(file);
        fs.writeFile(filePath, dataToAdd, (err) => {
            if (err) callBack(err);
            callBack(null, dataToAdd);
    });
      });
    };
}


module.exports = {
    create: function(directory) {
        return new Db(directory); 
    }
}

function callback(err, dataToAdd) {
    if (err) return process.stdout.write(err.toString());
    process.stdout.write(dataToAdd + ' File Updated!');
} 

var cuteAnimals = new Db('data');

//cuteAnimals.update('sloths.txt', {"name":"sloth","cuteness":"x1000000","_id":"KJEA79B939D", "doesAaronLIke": "yes, definitely, absolutely"}, callback);