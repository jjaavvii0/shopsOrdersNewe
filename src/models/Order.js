import {Schema, model} from "mongoose";

const orderSchema = new Schema({
    status: {
        type: String,
        enum : ['pending','processing', 'completed'],
        default: 'pending’'
    },
    items:[{
        type: String
    }],
    total: { type: Number }, 
    shop: { type: Schema.ObjectId },
},{
    //Fecha de creación y actualización.
    timestamps: true,
    //Quitar _ antes de cada campo.
    versionKey: false
})

//TODO: Items y total


//Exportamos un model, el model se va a llamar "Shop" y está basado
//en el schema shopSchema que acabamos de crear
export default model("Order", orderSchema)