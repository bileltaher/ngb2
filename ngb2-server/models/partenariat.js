const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PartenariatSchema = new Schema({
    image: {
        type: String, 
        required: false
    },
    website: {
        type: String,
        required: false
    },
    type : {
        type : String , 
        required : false 
    }
});
module.exports = Sponsoring = mongoose.model("Partenariat", PartenariatSchema);