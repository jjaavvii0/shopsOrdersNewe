import Shop from "../models/Shop"

export const createShop = async (req, res) => {
    try{
        const {name, description, phone, email, type} = req.body;
        const newShop = new Shop ({name, description, phone, email, type});

        const shopSaved = await newShop.save();

        res.status(201).send({data: shopSaved});
    }catch(e){
        res.status(404).json(e);
    }
}

export const getShops = async (req, res)=> {
    try{
        const shops = await Shop.find(req.query)
            .limit(10).skip(10*(req.query.page-1));
        res.status(200).json(shops)

    }catch(e){
        res.status(404).json(e);
    }
}

export const getShopById = async (req, res)=> {
    try{
        const shop = await Shop.findById(req.params.idShop)
        res.status(200).json(shop)
    }catch(e){
        res.status(404).json(e);
    }
}

export const updateShopById = async(req, res) => {
    try{
        const updatedShop = await Shop.findByIdAndUpdate(
            req.params.idShop, //Lo que buscamos.
            req.body,           //Los nuevos datos.
        {
            //Al poner new: true hacemos que nos mande el nuevo elemento con sus nuevos datos
            //por defecto mandaría los datos antiguos.
            new:true
        })
        res.status(200).json(updatedShop)
    }catch(e){
        res.status(404).json(e);
    }
}

export const deleteShopById = async (req, res) => {
    try{
        await Shop.findByIdAndDelete(req.params.idShop);
        res.status(204).json();
    }catch(e){
        res.status(404).json(e);
    }
}