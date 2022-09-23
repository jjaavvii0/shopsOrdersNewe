import Shop from "../models/Shop"

export const createShop = async (req, res) => {
    const {name, description, phone, email, type} = req.body;
    const newShop = new Shop ({name, description, phone, email, type});

    const shopSaved = await newShop.save();

    res.status(201).json(shopSaved);
}

export const getShops = async (req, res)=> {
    const shops = await Shop.find(req.query)
    res.status(200).json(shops)
}

export const getShopById = async (req, res)=> {
    const shop = await Shop.findById(req.params.idShop)
    res.status(200).json(shop)
}

export const updateShopById = async(req, res) => {
    const updatedShop = await Shop.findByIdAndUpdate(
        req.params.idShop, //Lo que buscamos.
        req.body,           //Los nuevos datos.
    {
        //Al poner new: true hacemos que nos mande el nuevo elemento con sus nuevos datos
        //por defecto mandaría los datos antiguos.
        new:true
    })
    res.status(200).json(updatedShop)
}

export const deleteShopById = async (req, res) => {
    await Shop.findByIdAndDelete(req.params.idShop);
    res.status(204).json();
}