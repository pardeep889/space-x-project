const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', (req,res) => {
    console.log('I am root');
});

app.get('/api/getLaunches', (req,res) => {
    res.json({
        title: "I am title",
        year: "2018"
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
