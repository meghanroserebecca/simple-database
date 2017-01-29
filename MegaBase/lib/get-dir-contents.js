const fs = require('fs');
const path = require('path');

function Db(directory){
    this.directory = directory;
}

Db.prototype.getDirContents = function(fileName, fileId, callBack) {
  const filePath = path.join(this.directory, fileName);
  fs.readFile(filePath, (err, data) => {
    if(err) return callBack(err);
    var obj = JSON.parse(data);
    if (obj._id !== fileId) return callBack('id does not match file id')
    callBack(null, obj);
  });
};

function writeData(err, data) {
    process.stdout.write(data);
};

module.exports = {
    create: function(directory) {
        return new Db(directory);
    }
}