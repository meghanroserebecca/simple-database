const fs = require('fs');
const path = require('path');
const index = require('./index-dir.js');

function Db(directory){
    this.directory = directory;
}

Db.prototype.getAll = function(directory, callBack) {
    fs.readdir(directory, (err, files) => {
        if (err) return cb(err);

        const results = [];
        let count = files.length;
        files.forEach((file, i) => {
            const fileName = path.join(directory, file);
            fs.readFile(fileName, { encoding: 'utf8' }, (err, content) => {
                if(err) return callBack(err);

                results[i] = content;
                count--;
                if(!count) {
                    callBack(null, results);
                }
            });
        });
    });
};

Db.prototype.getDirContentsById = function(fileName, fileId, callBack) {
  const filePath = path.join(this.directory, fileName);
  fs.readFile(filePath, (err, data) => {
    if(err) return callBack(err);
    var obj = JSON.parse(data);
    if (obj._id !== fileId) return callBack('id does not match file id')
    callBack(null, obj);
  });
};

function callback1(err, writeData) {
    if (err) return process.stdout.write(err.toString());
    process.stdout.write(writeData.toString());
}

function callback2(err, writeData) {
    if (err) return process.stdout.write(err.toString());
    process.stdout.write(writeData.toString());
}

module.exports = {
    create: function(directory) {
        return new Db(directory);
    }
}

var cuteAnimals = new Db('data');
cuteAnimals.getAll('data', callback1);
cuteAnimals.getDirContentsById('sloths.txt', "KJEA79B939D", callback2);