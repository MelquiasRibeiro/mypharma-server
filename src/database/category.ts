import mongoose from 'mongoose';

const {Schema} = mongoose;


const CategorySchema = new  Schema({
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
    },
},
{
    timestamps:true
}
)

export default mongoose.model("Category", CategorySchema)