function direBonjour( req , res , next){
console.log(`${Date()}: Bonjour`)
next();
}


function auth(req , res , next){
    req.user={name :"test" , score :134 }
    next();
}

module.exports = {
    direBonjour,
    auth}