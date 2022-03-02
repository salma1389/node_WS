
const http = require("http");
const PORT = 3000;

const server = http.createServer(function(req,res){

    res.setHeader('Content-Type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*")
    res.writeHead(200)
    res.end("hello from the other side")
    //  res.write('hello from the other side')
    //  res.end()
});


server.listen(PORT,function(){ 
console.log(`the server is listenning from the port : ${PORT}`)
})