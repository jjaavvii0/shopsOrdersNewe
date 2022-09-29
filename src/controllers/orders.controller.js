import Order from "../models/Order"
import Shop from "../models/Shop"

export const createOrder = async (req, res) => {
    try{
        const {status, items, shop} = req.body;
        const newOrder = new Order ({
            status, 
            items, 
            total: await Order.getTotal(items), 
            shop
        });
        const orderSaved = await newOrder.save();

        res.status(201).json(orderSaved);
    }catch(e){
        res.status(404).json(e);
    }
}

export const getOrders = async (req, res)=> {
    try{
        const requestedPage = req.query.page ? (req.query.page - 1) : 0;
        const shops = await Shop.find({ 
            _id : req.query.shop,
            type:  req.query.type 
        }).select('_id')
        const shopsIds = shops.map(shop => shop._id);

        const orders = await Order.find({
            shop:  { $in: shopsIds },
            status: req.query.status,
            'items.name': req.query.itemName
        }).populate({
            path: 'shop',
            select: 'name type',
        }).limit(10)
        .skip(10*requestedPage);
        
        res.status(200).json(orders);
    }catch(e){
        res.status(404).json(e);
    }
}

export const getOrderById = async (req, res)=> {
    try{
        const order = await Order.findById(req.params.idOrder)
        res.status(200).json(order);
    }catch(e){
        res.status(404).json(e);
    }
}

export const updateOrderById = async(req, res) => {
    try{
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.idOrder,
            req.body,
        {
            new:true
        })
        res.status(200).json(updatedOrder);
    }catch(e){
        res.status(404).json(e);
    }
}

export const deleteOrderById = async (req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.idOrder);
        res.status(204).json();
    }catch(e){
        res.status(404).json(e);
    }
}