const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const EmailSchema = new Schema({
    mail: {
        type: String, 
        required: false
    },

});
module.exports = email = mongoose.model("email", EmailSchema);