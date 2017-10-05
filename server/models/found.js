import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const foundSchema = new Schema({
    knownname:String,
    assumedage:String,
    knownkinname:String,
    image: String,    
    wherefound:String,
    bloodtype:String,
    careof:String
})

const Found = mongoose.model('Found', foundSchema);
export default Found