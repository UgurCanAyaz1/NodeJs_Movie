const mongoose= require('mongoose')

const movieSchema=mongoose.Schema(
    {
        name:{type:String,
            required:[true, "Movie name is mandatory"]
        },

        director:{type:String,
            required:[true, "Director name of the movie is mandatory"]
        },

        imdb_rating:{type:Number,
            required:[true, "IMDB rating of the movie is mandatory"]
        },

        release_year:{type:Number,
            required:[true, "Release date of the movie is mandatory"]
        },
    }
)

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;