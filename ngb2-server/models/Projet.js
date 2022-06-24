const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProjetSchema = new Schema({
    annee: {
        type: Date,
        required: false
    },
    nom: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    etat: {
        type: String,
        required: false
    }
});
module.exports = projet = mongoose.model("projet", ProjetSchema);