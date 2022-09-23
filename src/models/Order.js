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

orderSchema.statics.getTotal = async (items) => {
    const sumAll = items.map(item => item.total).reduce((prev, curr) => prev + curr, 0);
    return await sumAll;
}


export default model("Order", orderSchema)