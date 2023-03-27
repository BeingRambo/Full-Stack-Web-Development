//http module
const http = require('http');
const port = 8000;







// create server

const server = http.createServer((req, res)=>{
      
    //url module for req   abouts home contact us
     if(req.url == "/"){
        res.end("Home");      
     }
     else if(req.url == "/about")
     {
        res.end("About Us");   
     }

     else if(req.url == "/contact")
     {
        res.end("Contact Us");   
     }

     else if(req.url == "/services")
     {
        res.end("Services");   
     }
     else{
        res.writeHead(404, {"Content-type": "text/html" })
        res.end("<h1> 404 error pages. page doesn't exist </h1>")
     }




                      //response

});



//listneing req

server.listen(port, "127.0.0.1",()=>{                                  // taking two paramerters (port, localhost)

    console.log("listening to the port:",port)
});