import {Schema, model} from "mongoose";

const orderSchema = new Schema({
    status: {
        type: String,
        enum : ['pending','processing', 'completed'],
        default: 'pending’'
    },
    items: [{
        name : Number,
        quantity : Number,
        total: Number
    }],
    total: { type: Number }, 
    shop: { type: Schema.Types.ObjectId, ref: 'Shop' }
},{
    //Fecha de creación y actualización.
    timestamps: true,
    //Quitar _ antes de cada campo.
    versionKey: false
})

//TODO: Total

export default model("Order", orderSchema)