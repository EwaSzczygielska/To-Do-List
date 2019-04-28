const express = require('express');
const mongoose = require('mongoose');
const tasks = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = 'mongodb://localhost:27017/Tasks';

mongoose.connect(DB_URL, { useNewUrlParser: true })
    .then(() => {
        console.log('Successfully connected to database...');
    })
    .catch(err => {
        console.error('Some problems occur with connection to database', err);
    })

app.use(express.static(__dirname + '/static'));
app.use(express.json());
app.use('/tasks', tasks);

app.get('/', (req, res) => { res.sendFile(__dirname + '/static/index.html'); });
app.get('/', (req, res) => { res.sendFile(__dirname + '/static/stylesheets/style.css'); });

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT + '...');
});