const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://davi:199703@cluster0-gob28.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json());
app.use(routes);

//get, post, put, delete

//Query params: request.query (Filtros, ordeação, paginação, ...)
//Route params: request.params (Identificar recursos na alteração ou remoção)
//Body: 

app.listen(3333);