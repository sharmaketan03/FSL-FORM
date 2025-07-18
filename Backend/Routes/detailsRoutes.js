import { Router } from "express";
import { addDetails } from "../Controllers/addDetails.js";
import upload from "../Middleware/uploadMiddleware.js";

const detailRouter = Router();

// ✅ Correct way to receive multiple fields
detailRouter.post("/add", upload.fields([
  { name: 'imageFront', maxCount: 1 },
  { name: 'imageBack', maxCount: 1 }
]), addDetails);

// detailRouter.get('/get', getDetails);

export default detailRouter;


// import {Router} from "express"
// import { addDetails } from "../Controllers/addDetails"

// const detailRouter=Router()
// detailRouter.post("/add",upload.fields([]
//     name:"imageFront",maxCount:1,
//     name:"imageBack",maxCount:1,
// ]),addDetails)

// export default detailRouter