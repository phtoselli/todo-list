const express = require('express');
const router = require('./src/routes/task.routes');

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.use('/tasks', router);

app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));
