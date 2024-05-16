import {Router, Response, Request} from "express"
import { createMovie, findMovieById, getAllMovies } from "./controllers/movieController"

//validators
import {validate} from "./middleware/hendleValidation"
import { movieCreateValidation } from "./middleware/movieValidation"

const router = Router()

export default router.get("/test", (req:Request, res:Response) => {
    res.status(200).send("Api Working!")
}).post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id", findMovieById)
  .get("/movie", getAllMovies)