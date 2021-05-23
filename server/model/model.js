//Dependencies
const mongoose = require('mongoose');
//Schema for event creation
const eventSchema = new mongoose.Schema({
    title: String,
    url: String,
    desc: String,
    topic: String,
    img:{
        data: Buffer,
        contentType: String,
    }
});
//Model for event creation
const event = mongoose.model('event',eventSchema);


module.exports ={event};