import mongoose from 'mongoose';

const {Schema} = mongoose;


const ProductSchema = new  Schema({
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
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    brand:{
        type:Schema.Types.ObjectId,
        ref:'Brand'
    },
    category:[{
        type:Schema.Types.ObjectId,
        ref:'Category'
    }]
},
{
    timestamps:true
}
)

export default mongoose.model("Product", ProductSchema)