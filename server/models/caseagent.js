import mongoose from "mongoose";

const {Schema} = mongoose;

mongoose.Promise = global.Promise;

const caseAgentSchema = new Schema({    
    firstname:String,
    middlename:String,
    lastname:String,        
    mobile:String,    
    stationname:String,
    workId:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be 8 characters or more.'],
    }
});

const CaseAgent = mongoose.model("CaseAgent", caseAgentSchema);
export default CaseAgent;

