


let http = require ("http");

http.createServer((req,res)=>{
    res.write("chakri is a good boy");
    res.end();
}).listen(4000,()=>console.log("server is started"));