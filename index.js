const readline = require('readline');
const fs = require('fs');

const filename = require('./filename');
const findString = require('./findString');
const generateString = require('./generateStr');

const rl = readline.createInterface(process.stdin, process.stdout);

var fileContent;

rl.question("Enter a size of string > ", function (answer) {

    if( isNaN(answer) ){
      console.log("Enter number please, rerun programm...");
      rl.close();
    }
    else {
       let generatedStr = generateString(+answer);

        fs.writeFile(filename, `${generatedStr}\n`,{ flag: 'a+' }, error => {
            if(error) throw error;

            fs.readFile(filename, 'utf8', (error, data) => {
              if (error) throw error;
              fileContent = data.toString();
              console.log(fileContent);    
              console.log('Enter a string to find their number > ');                  
        });  
      });

      rl.on('line', function(string) {        
        let count = findString(fileContent, string);
        console.log(`Number of matches: ${count}`);
        rl.close();
      }); 
    }
});
