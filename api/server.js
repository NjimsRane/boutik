import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Salut');
});

app.listen(8080, () => {
    console.log('it is working');
});