var Express = require('express');
var port  = process.env.PORT || 5000;
var Https = require('https');
var BodyParser = require('body-parser');


var server = Express();
server.use(BodyParser.json())
server.use(require("./auth").authenticate)


server.post('/create',function(req,res,next){
    if(req.query.role=="admin")
    next()
    
},function(req,res){
console.log(">>>>>> req body" , req.body);
res.send("we are creating");
})

server.get('/campaigns' , function(req,res){
  res.send({data:[{"campaignid":100 , "title":"first"},{"campaignid":100 , "title":"first"},{"campaignid":100 , "title":"first"}
  ,{"campaignid":100 , "title":"first"},{"campaignid":100 , "title":"first"}]})  
})


server.get('/seven' , function(req,res){
    var url = "https://reqres.in/api/users"
    Https.get(url , function(data){
        console.log("data from secret api is" , data);
        res.send("Done")
    })
    
  
})

server.get("/:n" , function(req,res){
    console.log("req params" , req.params);

    res.send(req.query);
})





server.get("/",function(req,res){
res.send("Hi Epsilon")
})// address in string


server.listen(port,function(){
    console.log("server is running");
});

var a;

