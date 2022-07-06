const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const app = express();

// mongoose.connect();

app.use(express.json());
app.use(cors());
// app.use('/app', routesUrls);

app.listen(4000, () =>{
    console.log(`Server listening on $(PORT)`);
})