// html module

const html = require("http");
const port = 8000;
const fs = require('fs')   // file system module





//request handler
function requesthandler(req, res){
    console.log(res.url);
    res.writeHead(200, {"Content-type": "text/html"})


//                   //path              //error  //file data 
//    fs.readFile("./index.html", function(err, data){
      
//     if(err){
//         console.log("erroe", err);
//         return res.end("<h1>Error</h1>");
//     }
//     return res.end(data);
    

//    });


let filepath;

switch(req.url){
    case "/":
        filepath ="./index.html"
        break;
    case "/profile":
        filepath ="./profile.html"
        break;
    
    default:
        filepath = "./404.html"    
        
}

fs.readFile(filepath, function(err, data){

    if(err){
        console.log("error", err);
        return res.end("<h1>Error</h1>");
    }

    return res.end(data);
})
}



 


//creating server

const server = html.createServer(requesthandler);



//server listner
server.listen(port, function(err){   
    if(err)
    {
        console.log(err);
        return;
    }
                                  
    console.log("Server is running on port:",port);
});





//installing nodemon  type         npm install nodemon -g
// checking nodemon                nodemon -v
//accessing files                  nodemon index.js