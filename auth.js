exports.authenticate = function(req,res,next){
    var isAuthenticated;
if(isAuthenticated){
    next()
}
else{
    res.send("You are a theif");
}
}


authenticate

authenticate()