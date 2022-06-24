const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const RapportSchema = new Schema({
    doc: {
        type: String, 
        required: false
    },
    nom: {
        type: String,
        required: false
    },
    type : {
       type : String , 
       required : false  
    }
});
module.exports = rapport = mongoose.model("rapport", RapportSchema);