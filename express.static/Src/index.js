const express = require("express")
const path = require('path')
const port = 8000;

const app = express();

                            //absolute path
const staticpath =path.join(__dirname,"../public")     // html css path      

app.use(express.static(staticpath))              //builtin middleweare express.static



// app.get('/', function(req, res){   
//     return  res.send('hello');
// });




app.listen(port, function(err){

    if(err)
    {
        console.log("error")
    }
    console.log("express server running on",port)
})
