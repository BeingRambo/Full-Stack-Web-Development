const express = require("express")
const port = 8000;

const app = express();

//returning resonse
//According to the API reference, the first param always contain request req, then response res.


app.get('/', function(req, res){    
    res.send("<h1>Successfully run</h1>"); // automatically changing content-type
});







app.listen(port, function(err){

    if(err)
    {
        console.log("error")
    }
    console.log("express server running on",port)
})