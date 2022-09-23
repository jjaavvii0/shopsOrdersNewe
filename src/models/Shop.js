import {Schema, model} from "mongoose";

const shopSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String },
    phone: { type: String },
    email: { type: String },
    type: {
        type: String,
        enum : ['in-house','full-outsourcing'],
        default: 'in-house'
      }
},{
    //Fecha de creación y actualización.
    timestamps: true,
    //Quitar _ antes de cada campo.
    versionKey: false
})


//Exportamos un model, el model se va a llamar "Shop" y está basado
//en el schema shopSchema que acabamos de crear
export default model("Shop", shopSchema)