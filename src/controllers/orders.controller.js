import Order from "../models/Order"
import Shop from "../models/Shop"


export const placeHolder = async (req, res) => {
    res.json({message:"I'm the placeholder"})
}

export const createOrder = async (req, res) => {

    const {status, items, total, shop} = req.body;
    const newOrder = new Order ({
        status, 
        items, 
        total: await Order.getTotal(items), 
        shop
    });

    const orderSaved = await newOrder.save();

    res.status(201).json(orderSaved);
}

export const getOrders = async (req, res)=> {
    const orders = await Order.find(req.query)
    .populate({
        path: 'shop',
        select: 'name type'
    })

    res.status(200).json(orders)
}