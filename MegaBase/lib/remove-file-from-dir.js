const fs = require('fs');
const rimraf = require('rimraf');
const path = require('path');

function Db(directory){
    this.directory = directory;
}

Db.prototype.remove = function (directory, fileName, fileId, callback) {
  fs.readdir(directory, (err, files) => {
    if (err) return (err);
    let count = files.length;
    var deletedFilesCount = 0;
    files.forEach((file, i) => {
      const fileName = path.join(directory, file);
      fs.readFile(fileName, { encoding: 'utf8' }, (err, content) => {
        if(err) return callBack(err);
        var obj = JSON.parse(content);
        if(obj._id === fileId) {
            fs.unlink(fileName);
            deletedFilesCount++;
        }
        count--;
        if(!count) {
            callback(null, deletedFilesCount);
          }
      });
    });
  });
};

function callback(err, deletedFilesCount) {
    if (err) return process.stdout.write(err.toString());
    process.stdout.write(deletedFilesCount + ' files removed!');
} 

module.exports = {
    create: function(directory) {
        return new Db(directory);
    }
}

var cuteAnimals = new Db('data');
//cuteAnimals.remove('data', 'lolCat.txt',"RWAV79BW4QY", callback);