const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const StageSchema = new Schema({
    ville: {
        type: String, 
        required: false
    },
    prenom: {
        type: String,
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
    sujet: {
        type: String,
        required: false
    },
    universite : {
        type: String,
        required: false
    },
    specialite: {
        type: String,
        required: false
    }
    ,
    email: {
        type: String,
        required: false
    },
    tel: {
        type: String,
        required: false
    },
    cv:{
        type:String , 
        required:false 
    },
    dateEntretien: {
        type: Date,
        required: false
    },
    etat  : {
        type : String , 
        required : false 
    },
    autre  : {
        type : String , 
        required : false 
    }
});
module.exports = stage = mongoose.model("stage", StageSchema);