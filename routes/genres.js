const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {
    const genres = await prisma.genre.findMany();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching genres' });
  }
});

router.post('/', async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Genre name is required' });
  }

  try {
    const newGenre = await prisma.genre.create({
      data: { name },
    });
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(500).json({ error: 'Error creating genre' });
  }
});

module.exports = router;