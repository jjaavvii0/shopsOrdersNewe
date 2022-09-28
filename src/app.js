import express from "express"    
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"

import shopsRoutes from './routes/shops.routes'
import ordersRoutes from './routes/orders.routes'


const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(helmet());
app.use(cors({
    origin: '*'
}));


app.use("/shops", shopsRoutes);
app.use("/orders", ordersRoutes);

export default app;