// const http=require('http');

// const myserver =http.createServer((req , res)=>{

//        // console.log('server 1');
//        // res.end('Hello thsi is my first server');
//        // rest api if(req.url=='api/')
//        if(req.url=='/'){
//         res.end('welcome to abes college of engineering');
//        }
//       else if(req.url=='/about'){
//  res.end('<img src="file:///C:/Users/DELL/OneDrive/Desktop/node-test/abes.jpg">');
// }


//        else if(req.url=='/contact'){
//         res.end('my contact no is 1234567890');
//        }
        
//        else{
//         res.end('404 page not found');
//        }

// })
// myserver.listen(8006 , ()=> console.log('server is run'));


// const fs = require('fs');
// //fs.writeFileSync("./cse-c.txt" , "this is my first file created by node js");
// const result= fs.readFileSync("./cse-c.txt" , "utf-8");
// console.log(result);

const fs = require('fs');
// fs.writeFile("./a.txt" , "abes is a college" , () => { });

// fs.readFile("./a.txt" , "utf-8" , (err , result) => { 
//     if(err){
//         console.log("error" , err);
//     }
//     else{
//         console.log(result);
//     }
// });

 //using async writefile
// fs.writeFile("./b.txt" , "my name is vishal" ,(err) => {
//     if(err){
//         console.log("error" , err );
//     }
//     else{
//         console.log("successfully executed");
//     }
// })

// fs.appendFileSync("./a.txt" , "what is your name")

//copy through sync

// fs.cpSync("./a.txt" , "./b.txt")

// =>  
    fs.unlinkSync("./a.txt");