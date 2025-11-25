const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const genreRoutes = require('./routes/genres');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/genres', genreRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});