import mongoose from "mongoose";

const {Schema} = mongoose;

mongoose.Promise = global.Promise;

const closedMissingCaseSchema = new Schema({
	casemissing:{
        type: Schema.Types.ObjectId, ref: "Missing"
    },
    firstname:String,
	middlename:String,
	lastname:String,
	image:String,
	dateofbirth:String,
	lastseen:String,
	family:{
		ffirstname:String,
        fmiddlename:String,
        flastname:String,
		mobile:String,
		ward:String,
		stationname:String,
		relation:String
	},
	bloodtype:String
})

const closedMissingCase = mongoose.model('ClosedMissingCase', closedMissingCaseSchema);
export default closedMissingCase;