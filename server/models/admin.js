import mongoose from "mongoose";

const {Schema} = mongoose;

mongoose.Promise = global.Promise;

const adminSchema = new Schema({
    mobile:{
        type:String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: [5, 'Username must be 5 characters or more.'],
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be 8 characters or more.'],
    }
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;

