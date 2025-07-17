import { Router } from "express";
import { addDetails,getDetails} from "../Controllers/addDetails.js";
import Middleware from "../Middleware/uploadMiddleware.js";


const detailRouter = Router();

detailRouter.post("/add", addDetails);
detailRouter.get('/get',Middleware,getDetails)

export default detailRouter;
