import {model, Schema} from "mongoose"

const movieSchema = new Schema(
    {
    title: {type: String},
    rating: {type: Number},
    desciption: {type: String},
    stars: {type: Array},
    poster: {type: String}
    },
    {
        timestamps: true
    }
)

export const MovieModel = model("Movie", movieSchema)