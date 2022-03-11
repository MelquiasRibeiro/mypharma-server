import mongoose from 'mongoose';

const {Schema} = mongoose;


const UserSchema = new  Schema({
    uuid:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
},
{
    timestamps:true
}
)

export default mongoose.model("User", UserSchema)