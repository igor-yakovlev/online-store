const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const PORT = 4000;

app.use(bodyParser.json());
app.use('/api', routes);


mongoose
    .connect("mongodb://localhost:27017/onlineStore", {useNewUrlParser: true})
    .then(() => {
        app.listen(PORT, () => console.log(`Server started at ${PORT}`))
    })
