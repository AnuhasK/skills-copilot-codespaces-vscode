//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Read comments
app.get('/comments', (req, res) => {
    fs.readFile(commentsPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Some error occurred');
        }
        res.send(data);
    });
});

//Create comment
app.post('/comments', (req, res) => {
    fs.readFile(commentsPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Some error occurred');
        }
        const comments = JSON.parse(data);
        const newComment = {
            id: comments.length + 1,
            text: req.body.text,
