#!/usr/bin/env node

let fs = require('fs');

(function(){
    let n = process.argv[2];
    let name = process.argv[3];

    if(!Number.isInteger(+n) || n <= 0){
        console.log("invalid input");
        return;
    }

    try{

        for(let i = 0; i < n; i++){
            if(fs.existsSync(`${name}-${i}`)) 
                fs.rmdirSync(`${name}-${i}`);
            else
              fs.mkdirSync(`${name}-${i}`);
        }
   
    } 
    catch(err){
        console.log("some error occured");
    }
 
})();

