const http=require('http');

const myserver =http.createServer((req , res)=>{

       // console.log('server 1');
       // res.end('Hello thsi is my first server');
       // rest api if(req.url=='api/')
       if(req.url=='/'){
        res.end('welcome to abes college of engineering');
       }
      else if(req.url=='/about'){
 res.end('<img src="file:///C:/Users/DELL/OneDrive/Desktop/node-test/abes.jpg">');
}


       else if(req.url=='/contact'){
        res.end('my contact no is 1234567890');
       }
        
       else{
        res.end('404 page not found');
       }

})
myserver.listen(8006 , ()=> console.log('server is run'));
