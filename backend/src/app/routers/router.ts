import { Router } from "express";
import { UserRouters } from "../../module/User/user.route";
import { ProductRouters } from "../../module/Products/product.route";
import { AuthRoutes } from "../../module/Auth/auth.route";
import orderRouter from "../../module/Orders/order.route";

const router = Router();

const moduleRouters = [
    {
        path: '/users',
        route: UserRouters
    },
    {
        path: '/products',
        route: ProductRouters
    },
    {
        path: '/order',
        route: orderRouter
    }, 
    
    {
        path: '/auth',
        route: AuthRoutes
    }, 

]



moduleRouters.forEach((route) => router.use(route.path, route.route));
export default router;
