import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const careOfSchema = new Schema({
    name:{
        firstname:String,
        middlename:String,
        lastname:String        
    },
    mobile:String,            
    address:{
        ward : {
            type: String,
            required: true
        },
        org:{
            type:String,
            required:true
        }
    },
    password:{
        type:String,
        required:true
    }
});

const CareOf = mongoose.model('CareOf', careOfSchema);
export default CareOf;

