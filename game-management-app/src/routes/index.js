const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const gameRoutes = require('./gameRoutes');

router.use('/auth', authRoutes);
router.use('/games', gameRoutes);

module.exports = router;