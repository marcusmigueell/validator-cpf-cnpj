import { Router } from "express"
import cors from "cors"

import ValidateController from "../controller/validateController"

const routes = Router()
routes.use(cors())

routes
    .route("/Validate/:identifier")
    .get(new ValidateController().handle)

export { routes }