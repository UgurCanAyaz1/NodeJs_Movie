const express = require ("express")
const movieRouter= express.Router()
const Movie= require('../models/movieModel')

movieRouter.get('/getAllMovies', async(req,res) => {
    try {
        const movies= await Movie.find({})
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


movieRouter.get('/getMovie/:id',async(req,res) => {
    try {
        const {id} =req.params
        const movie= await Movie.findById(id)
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Add Movie
movieRouter.post('/addMovie', async (req, res) => {
    try {
        const addedMovieToDB = await Movie.create(req.body);
        res.status(200).json(addedMovieToDB);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Update Specific Movie
movieRouter.put('/updateMovie/:id', async(req,res) => {
    try {
        const{id}=req.params
        const updatedMovie= await Movie.findByIdAndUpdate(id,req.body,{ new: true });
        if(!updatedMovie){
            return res.status(404).json({message: "Movie does not exist!"})
        }
        res.status(200).json(updatedMovie)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Delete Specific Movie
movieRouter.delete('/deleteMovie/:id', async(req,res) => {
    try {
        const{id}=req.params
        const movie =await Movie.findByIdAndDelete(id)

        if(!movie){
            return res.status(404).json({message: "Movie does not exist!"})
        }
        res.status(200).json("Movie has been deleted!")
    } catch (error) {
        
    }
})

module.exports = movieRouter