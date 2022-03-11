import mongoose from 'mongoose';

const {Schema} = mongoose;


const BrandSchema = new  Schema({
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
    description:{
        type:String,
        required:true,
        unique:true
    },
},
{
    timestamps:true
}
)

export default mongoose.model("Brand", BrandSchema)