const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formSchema = new Schema({
    username:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    
    email:{
        type: String,
        require: true,
    },

    taskName:{
        type: String,
        
    },

}, {timestamp: true})
const Model = mongoose.model('task-manager', formSchema)
module.exports = Model;