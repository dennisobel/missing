import mongoose from "mongoose";

const {Schema} = mongoose;

mongoose.Promise = global.Promise;

const closedFoundCaseSchema = new Schema({
	casefound:String,
    knownname:String,
    assumedage:String,
    knownkinname:String,
    image: String,    
    wherefound:String,
    bloodtype:String,
    careof: String
})

const ClosedFoundCase = mongoose.model('ClosedFoundCase', closedFoundCaseSchema);
export default ClosedFoundCase;