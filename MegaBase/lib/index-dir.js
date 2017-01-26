var simpleid = require('simpleid');

function Db(directory){
    this.directory = directory;
}

Db.prototype.save = function(directory, file, callBack) {
    //checkIfHas_id
    file._id = simpleid();
    //ifYesExistsThrowError
    var jsonFile = JSON.stringify(file);
   // ifNotThenCreateWith_id
   fs.writeFile(cuteAnimals.txt, jsonObject, (err) => {
       if (err) callBack(err);
       else
        process.stdout.write('It\s Saved!');
   })
}

module.exports = {
    create: function(directory) {
        return new Db(directory); 
    }
}