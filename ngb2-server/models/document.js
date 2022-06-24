const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const documentSchema = new Schema({
    doc: {
        type: String, 
        required: false
    },
    nom: {
        type: String,
        required: false
    }
});
module.exports = document = mongoose.model("document", documentSchema);