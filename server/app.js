const express = require('express');
const app = express();

app.get("/",(req,res) => {
    res.status(200).send('hello world');
});

app.get("/about",(req,res) => {
    res.send(`about page`);
});

app.listen(8000, '127.0.0.1', () => {
    console.log('connection successful');
})