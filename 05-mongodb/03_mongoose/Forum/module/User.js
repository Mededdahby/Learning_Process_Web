const { model , Schema} =require('mongoose')

let user = new Schema({
    name : String,
    email: String,
    password: String
});

const User = new model( "User" , user)

module.exports = User;