var fs = require('fs');
var sum = require('./app');

console.log(sum(3,4))

console.log('starting to process...')
// var content = fs.readFileSync('./files/node.txt');
// console.log('Content is: ' + content);

fs.readFile('./files/node.txt', function(err, content){
    if(err) throw err;
    console.log('Content is: ' + content);
    fs.readFile('./files/node2.txt', function(err, content){
        if(err) throw err;
        console.log('Content is: ' + content);
        fs.readFile('./files/node2.txt', function(err, content){
            if(err) throw err;
            console.log('Content is: ' + content);
        })
        
    })
})



console.log('finished processing...')

