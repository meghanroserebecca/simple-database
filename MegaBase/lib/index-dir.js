var simpleid = require('simpleid');

function Db(directory){
    this.directory = directory;
}

Db.prototype.save = function(fileName, jsonObjectToSave, callbackFunction) {
    //checkIfHas_id
    //ifYesExistsThrowError

   // ifNotThenCreateWith_id
   fs.writeFile(cuteAnimals.txt, jsonObjectToSave.simpleid(), (err) => {
       if (err) throw err;
       process.stdout.write('It\s Saved!');
   }).
}

fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});