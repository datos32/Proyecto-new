const file = require('fs');

module.exports = function GetConfig(filename){
        let Readfile = file.readFileSync(filename);
        return JSON.parse(Readfile);
}
