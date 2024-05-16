import {model, Schema} from "mongoose"

const movieSchema = new Schema(
    {
    title: {type: String},
    rating: {type: Number},
    description: {type: String},
    director: {type: String},
    stars: {type: Array},
    poster: {type: String}
    },
    {
        timestamps: true //A data que o filme foi criado/atualizado
    }
)

export const MovieModel = model("Movie", movieSchema)