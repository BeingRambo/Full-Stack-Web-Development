//http module
const http = require('http');
const port = 8000;





// create server

const server = http.createServer((req, res)=>{

    res.end("Hello I am Server");                         //response

});



//listneing req

server.listen(port, "127.0.0.1",()=>{                                  // taking two paramerters (port, localhost)

    console.log("listening to the port:",port)
});