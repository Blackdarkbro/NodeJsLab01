const alphabet = "abcdefghijklmnopqrstuvwxyz";
var str = "";

function generateString(size) {
    for(let i = 0; i < size; i++) {
        str += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    return str;  
}
module.exports = generateString;