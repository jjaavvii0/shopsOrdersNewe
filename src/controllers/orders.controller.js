import Order from "../models/Order"
import Shop from "../models/Shop"

export const createOrder = async (req, res) => {
    try{
        const {status, items, total, shop} = req.body;
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
        const skipper = 10*(req.query.page-1);
        const orders = await Order.find(req.query)
        .populate({
            path: 'shop',
            select: 'name type',
            // match: { type: { $in: req.query.type}}
        })
        // .limit(10).skip(10*(req.query.page-1))

        //TODO (mejorar estas funciones, controlar errores y parámetros incorrectos)
        const ordersWithType = orders.filter(function(order) {
            return ((order.shop != null) && (order.shop.type == req.query.type))
        });
        const ordersWithPagination = ordersWithType.slice(skipper, skipper+10);
        res.status(200).json(ordersWithPagination)
    }catch(e){
        res.status(404).json(e);
    }
}

export const getOrderById = async (req, res)=> {
    try{
        const order = await Order.findById(req.params.idOrder)
        res.status(200).json(order)
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
        res.status(200).json(updatedOrder)
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