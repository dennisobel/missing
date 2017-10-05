import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const missingSchema = new Schema({    
    firstname: {type: String},
    middlename: {type: String},
    lastname: {type: String},         
    image:String,
    dateofbirth:{type: Date},      
    lastseen: String,    
    family:{
        ffirstname:String,
        fmiddlename:String,
        flastname:String,
        mobile:{            
            type: String,
            required: true,
            unique: true            
        },                
        ward:String,
        stationname:String,
        relation:String
    },
    bloodtype: String  
})

const Missing = mongoose.model('Missing', missingSchema);
export default Missing