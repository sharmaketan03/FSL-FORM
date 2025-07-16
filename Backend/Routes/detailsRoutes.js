import {Router} from "express"
import { addDetails } from "../Controllers/adddetails.js"

const detailRouter=Router()
detailRouter.post('/add',addDetails)

export default detailRouter;