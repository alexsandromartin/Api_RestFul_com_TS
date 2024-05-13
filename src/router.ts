import {Router, Response, Request} from "express"
import { createMovie } from "./controllers/movieController"

//validators
import {validate} from "./middleware/hendleValidation"

const router = Router()

export default router.get("/test", (req:Request, res:Response) => {
    res.status(200).send("Api Working!")
}).post("/movie", validate, createMovie)