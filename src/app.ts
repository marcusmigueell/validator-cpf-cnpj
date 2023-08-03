import express, { NextFunction, Response, Request } from "express"
import { routes } from "./routes"
import swaggerUi from "swagger-ui-express"
import * as swaggerDocument from "./swagger.json"

const app = express()

    app
       .use(express.json())
       .use('/api', routes)
       .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
       .use((err: Error, request: Request, response: Response, next: NextFunction) => {
            if (err instanceof Error)
                return response.status(400).json({ message: err.message })

            return response.status(500).json({
                status: "error",
                message: `Internal server error - ${err}`
            })
        })

export { app }