const fs = require('fs');


// ------------------------ Reading and writting files Synchronically------------------------//

// Reading content from the file
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

// Definign what to write in the file
const textOut = `This is what we know about avacado: ${textIn}\nCreated on ${Date.now()}`;
console.log(textOut);

// Writting a file 
fs.writeFileSync('./txt/output.txt', textOut);
console.log(`File written!`);


// ------------------------ Reading and writting files Asynchronically ------------------------//

fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
     console.log(data);
});
console.log("will read file!");


// reading files asynchronically by callback hell method
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
          console.log(data2);
          fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
               console.log(data3);

               // writting the file asynchronously 
               fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, 'utf-8', (err) => {
                    console.log(`Your file has been written 😊`);
               })
          });
     });
});
console.log("will read file!");
console.log(fs.readFileSync(`./txt/final.txt`, 'utf-8'));