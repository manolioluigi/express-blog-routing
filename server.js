const express = require('express');
const dotenv = require('dotenv').config();
const server = express();
const port = process.env.PORT || 3300;

//rotte
server.get('/', (req, res) => {
    res.send('Ciao');
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
