var array = [];

function readString(file, string){
        var count = 0;
        array = file.split("\n");     
        array.forEach(element => { if(string === element) count++ });
 return count;
}

module.exports = readString;