const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const EventSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    nbParticipant: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    }
});
module.exports = Event = mongoose.model("event", EventSchema);