const express = require('express');
const app = express();
const mongoose = require('mongoose');
const listing = require('./routes/listing');
const name = require('./routes/filterByname');
const cors = require('cors'); // for resolving cors

app.use(cors());// for resolving cors
app.use(express.json());
app.use('/api/listing/filterBy', name);
app.use('/api/listing', listing);


const port = 3000;
app.listen(3000, ()=> console.log("Listening on port "+port));