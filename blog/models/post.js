const { Module } = require('module');
const { model ,Schema, Model } = require('mongoose')

const newData = new Schema({
    titre:{
        type:String,
        require:true,
    },
    slug:{
        type:String,
        unique: true,
    },
    content:{
        type: String,
    },
    createdAt : Date,
    updatedAt:Date,

})



let post = model('Post', newData);



module.exports =post;