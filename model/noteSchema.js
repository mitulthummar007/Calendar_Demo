import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    dateId : {type : String , require : true},
    text: {type: String , require : true}
},{timestamps : true});

export const noteTable = mongoose.model('notes',noteSchema) 