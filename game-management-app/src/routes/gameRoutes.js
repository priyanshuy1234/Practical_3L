const express = require('express');
const router = express.Router();
const Game = require('../models/gameSchema');

// CREATE a new game
router.post('/new', async (req, res) => {
    try {
        const game = new Game(req.body);
        await game.save();
        res.redirect('/games');
    } catch (error) {
        res.status(400).send(error);
    }
});

// READ all games
router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        res.render('games/index', { games });
    } catch (error) {
        res.status(500).send(error);
    }
});

// SHOW a specific game
router.get('/:id', async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) {
            return res.status(404).send('Game not found');
        }
        res.render('games/show', { game });
    } catch (error) {
        res.status(500).send(error);
    }
});

// EDIT a specific game
router.get('/:id/edit', async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) {
            return res.status(404).send('Game not found');
        }
        res.render('games/edit', { game });
    } catch (error) {
        res.status(500).send(error);
    }
});

// UPDATE a specific game
router.post('/:id/edit', async (req, res) => {
    try {
        const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!game) {
            return res.status(404).send('Game not found');
        }
        res.redirect(`/games/${game._id}`);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE a specific game
router.post('/:id/delete', async (req, res) => {
    try {
        const game = await Game.findByIdAndDelete(req.params.id);
        if (!game) {
            return res.status(404).send('Game not found');
        }
        res.redirect('/games');
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;